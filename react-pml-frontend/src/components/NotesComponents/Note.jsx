import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";
import DOMPurify from "dompurify";
const Note = ({ note, index }) => {
  const noteRef = useRef(null);
  const noteContent = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [bloading, setBLoading] = useState(false);

  useEffect(() => {
    if (noteRef.current) {
      setBLoading(true);
    }
  }, [noteRef]);
  const handleExtend = () => {
    if (noteRef.current) {
      if (toggle) {
        noteRef.current.style.maxHeight = "150px";
      } else {
        noteRef.current.style.maxHeight = "1000px";
      }
      setToggle((toggle) => !toggle);
    }
  };

  return (
    <>
      <Box className="note-outter" ref={noteRef}>
        <div
          key={index}
          ref={noteContent}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(note),
          }}
        ></div>
        {bloading &&
        noteContent.current &&
        noteContent.current.offsetHeight > 150 ? (
          <Button className="more" onClick={handleExtend}>
            {toggle ? "Close" : "Open"}
          </Button>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Note;
