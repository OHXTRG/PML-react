import { Button, IconButton, Typography, Box, Modal } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DOMPurify from "dompurify";
const mainBox = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "80dvw",
  height: "80dvh",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Viewnote = ({ open, handleClose, callBack, callbackInput }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={mainBox}>
          <Box
            sx={{
              position: "absolute",
              top: "25px",
              right: "25px",
              padding: "2px",
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              padding: "20px",
              border: "1px solid black",
              width: "100%",
              height: "100%",
              overflow: "auto",
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(callbackInput.data),
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Viewnote;
