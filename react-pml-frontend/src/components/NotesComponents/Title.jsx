import React, { useCallback, useState } from "react";
import { Stack, Typography, Box, Button, IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteModal from "../Modals/DeleteModal";
import { DeleteNote } from "../../apis/DeleteNote";
import { toast } from "react-toastify";
const Title = ({ note }) => {
  const [deleteNote, setDeleteNote] = useState(false);
  const handleDeleteNote = useCallback(async (id, api) => {
    try {
      console.log(id, "dslfkjdlk");
      const { data } = await DeleteNote(id, api);
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeleteNote(false);
    }
  });
  return (
    <>
      <Box
        className="title"
        style={{
          backgroundColor: "rgba(29, 33, 38, 0.1)",
          padding: "20px 20px 10px 20px",
          borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
        }}
      >
        <Stack direction="row" alignItems={"center"}>
          <Typography style={{ flexGrow: 1, fontSize: "18px" }}>
            {note.title}
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: "row-reverse", gap: "20px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography style={{ fontSize: "12px" }}>
                Created At :{" "}
                {note.createdAt
                  ? moment(moment(note.createdAt)).format("Do MMM YYYY")
                  : "Not recorded"}
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                Updated At :{" "}
                {note.updatedAt
                  ? moment(moment(note.updatedAt)).format("Do MMM YYYY")
                  : "Not recorded"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "3px" }}>
              <IconButton onClick={() => setDeleteNote(true)}>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Box>

      <DeleteModal
        open={deleteNote}
        handleClose={setDeleteNote}
        callbackInput={{ data: note._id, api: "react/deleteNote" }}
        callBack={handleDeleteNote}
      />
    </>
  );
};

export default Title;
