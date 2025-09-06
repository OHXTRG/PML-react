import {
  Button,
  IconButton,
  Typography,
  Box,
  Modal,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Textfiled from "../formComponents/Textfiled";
const mainBox = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  maxWidth: "50dvw",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const titleBar = {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
  padding: "12px 12px 12px 12px",
  alignItems: "center",
  color: "#aa0000",
};
const bottomBar = {
  display: "flex",
  //   justifyContent: "space-between",
  flexDirection: "row-reverse",
  gap: "10px",

  borderTop: "1px solid rgba(61, 71, 81, 0.3)",
  padding: "12px 12px 12px 12px",
};

const content = {
  padding: "10px 20px 20px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
const DeleteNoteModule = ({ open, handleClose, callBack, callbackInput }) => {
  const [confirmNoteModule, setConfirmNoteModule] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={mainBox}>
          <Box sx={titleBar}>
            <Typography
              component={"p"}
              sx={{ fontSize: "22px", fontWeight: "700" }}
            >
              Delete!
            </Typography>
            <IconButton onClick={() => handleClose(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={content}>
            <Typography component={"p"} sx={{ fontSize: "20px" }}>
              Please Type the Note Module Name "{callbackInput.noteModule}"
            </Typography>
            <Textfiled
              fullWidth
              value={confirmNoteModule}
              placeholder="Enter Note Module Name"
              onChange={(e) => {
                setError("");
                setConfirmNoteModule(e.target.value);
              }}
            />
            {error ? (
              <FormHelperText sx={{ color: "red" }}>{error}</FormHelperText>
            ) : (
              ""
            )}
          </Box>
          <Box sx={bottomBar}>
            <Button
              onClick={() => {
                if (confirmNoteModule.trim() == callbackInput.noteModule) {
                  setError("");
                  callBack(callbackInput.noteModule);
                } else {
                  setError("Please enter correct name");
                }
              }}
              sx={{ color: "red" }}
            >
              Yes
            </Button>
            <Button onClick={() => handleClose(false)} sx={{ color: "black" }}>
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteNoteModule;
