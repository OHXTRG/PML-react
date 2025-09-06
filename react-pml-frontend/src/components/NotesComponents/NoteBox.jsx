import React from "react";
import { Box, Stack, Chip, Link } from "@mui/material";
import Note from "./Note";
import Title from "./Title";
import { useCustomContextHook } from "../../contextApi/context";

const NoteBox = ({ note, index, noteModule }) => {
  return (
    <Box
      className="note-item-wrapper"
      style={{
        border: "1px solid rgba(61, 71, 81, 0.3)",
        borderRadius: "12px",
      }}
    >
      <Stack>
        <Title note={note} noteModule={noteModule} />
        <Box className="tags">
          {note.tags.map((tag) => (
            <Chip variant="outlined" label={tag} />
          ))}
        </Box>

        <Note note={note.note} index={index} />
        <Box className="imp-links">
          {note.impLinks.map((link) => (
            <Link href={link} target="_blank" rel="noreferrer">
              {link}
            </Link>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default NoteBox;
