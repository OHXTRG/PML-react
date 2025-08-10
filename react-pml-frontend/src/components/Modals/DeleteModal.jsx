import { Button, IconButton, Typography, Box, Modal } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const mainBox = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "300px",
  maxWidth: "35dvw",
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
  padding: "10px",
};
const DeleteModal = ({ open, handleClose, callBack, callbackInput }) => {
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
              Please confirm!!
            </Typography>
          </Box>
          <Box sx={bottomBar}>
            <Button
              onClick={() => callBack(callbackInput.data, callbackInput.api)}
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

export default DeleteModal;
