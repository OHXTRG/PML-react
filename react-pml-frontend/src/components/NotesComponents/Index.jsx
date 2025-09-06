import React from "react";
import { useSelector } from "react-redux";
import { Box, Stack, Chip, Link } from "@mui/material";
import Note from "./Note";
import Title from "./Title";
import { useCustomContextHook } from "../../contextApi/context";
import NoteBox from "./NoteBox";
const Index = ({ noteModule }) => {
  const notes = useSelector((state) => state.reactNotes);
  const { searchKey } = useCustomContextHook();
  const searchData = useSelector((state) => state.searchData);

  return (
    <>
      <Box className="notes-outter">
        {searchKey.key
          ? searchData.loading
            ? "...loading"
            : Array.isArray(searchData.data) && searchData.data.length > 0
            ? searchData.data.map((note, index) => (
                // <Box
                //   className="note-item-wrapper"
                //   style={{
                //     border: "1px solid rgba(61, 71, 81, 0.3)",
                //     borderRadius: "12px",
                //   }}
                // >
                //   <Stack>
                //     <Title note={note} noteModule={noteModule} />
                //     <Box className="tags">
                //       {note.tags.map((tag) => (
                //         <Chip variant="outlined" label={tag} />
                //       ))}
                //     </Box>

                //     <Note note={note.note} index={index} />
                //     <Box className="imp-links">
                //       {note.impLinks.map((link) => (
                //         <Link href={link} target="_blank" rel="noreferrer">
                //           {link}
                //         </Link>
                //       ))}
                //     </Box>
                //   </Stack>
                // </Box>
                <NoteBox note={note} index={index} noteModule={noteModule} />
              ))
            : "No search data found"
          : notes.loading
          ? "loading..."
          : Array.isArray(notes.data) && notes.data.length > 0
          ? notes.data.map((note, index) => (
              // <Box
              //   className="note-item-wrapper"
              //   style={{
              //     border: "1px solid rgba(61, 71, 81, 0.3)",
              //     borderRadius: "12px",
              //   }}
              // >
              //   <Stack>
              //     <Title note={note} noteModule={noteModule} />
              //     <Box className="tags">
              //       {note.tags.map((tag) => (
              //         <Chip variant="outlined" label={tag} />
              //       ))}
              //     </Box>

              //     <Note note={note.note} index={index} />
              //     <Box className="imp-links">
              //       {note.impLinks.map((link) => (
              //         <Link href={link} target="_blank" rel="noreferrer">
              //           {link}
              //         </Link>
              //       ))}
              //     </Box>
              //   </Stack>
              // </Box>
              <NoteBox note={note} index={index} noteModule={noteModule} />
            ))
          : "no notes found"}
      </Box>
    </>
  );
};

export default Index;
