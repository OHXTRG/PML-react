import React from "react";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import {
  Box,
  Stack,
  Chip,
  Link,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Note from "./Note";
import Title from "./Title";
import moment from "moment";

const Index = () => {
  const notes = useSelector((state) => state.reactNotes);
  // console.log(notes, "sdlkfjasdlkj");
  // console.log(moment(note.updatedAt, "Do MMM YYYY"));
  return (
    <>
      <Box className="notes-outter">
        {notes.loading
          ? "loading..."
          : Array.isArray(notes.data) && notes.data.length > 0
          ? notes.data.map((note, index) => (
              <Box
                className="note-item-wrapper"
                style={{
                  border: "1px solid rgba(61, 71, 81, 0.3)",
                  borderRadius: "12px",
                }}
              >
                <Stack>
                  <Title note={note} />
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
            ))
          : "no notes found"}
      </Box>
    </>
  );
};

export default Index;
