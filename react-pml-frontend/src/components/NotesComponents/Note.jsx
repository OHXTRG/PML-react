import React, { useEffect, useRef, useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import DOMPurify from "dompurify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ViewNoteModal from "../Modals/ViewNote";

const Note = ({ note, index }) => {
  const noteRef = useRef(null);
  const noteContent = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [bloading, setBLoading] = useState(false);
  const [viewNote, setViewNote] = useState(false);

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
      <Box className="note-outter" ref={noteRef} onClick={handleExtend}>
        <Box sx={{ position: "absolute", top: "2px", right: "2px" }}>
          <IconButton onClick={() => setViewNote(true)}>
            <VisibilityIcon />
          </IconButton>
        </Box>
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
          <Button className="more">{toggle ? "Close" : "Open"}</Button>
        ) : (
          ""
        )}
      </Box>
      <ViewNoteModal
        handleClose={() => setViewNote(false)}
        open={viewNote}
        callbackInput={{ data: note }}
      />
    </>
  );
};

export default Note;
