import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <Button
            variant="text"
            className="custom-button"
            onClick={() => navigate("/")}
          >
            Notes
          </Button>
          {/* <Box>
            <Button>React Notes</Button>
          </Box> */}
          <Box>
            <Button
              className="custom-button"
              variant="text"
              onClick={() => navigate("/react-notes")}
            >
              React Notes
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Index;
