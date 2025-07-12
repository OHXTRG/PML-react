import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router";
const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography component="p" onClick={() => navigate("/")}>
            Notes
          </Typography>
          {/* <Box>
            <Button>React Notes</Button>
          </Box> */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Index;
