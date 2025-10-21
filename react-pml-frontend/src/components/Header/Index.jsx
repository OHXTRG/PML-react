import React from "react";
import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <Container>
            <Box
              sx={{
                width: "100%",
                overflow: "auto",
                display: "flex",
                gap: "5px",
                flexWrap: "nowrap",
                alignItems: "center",
              }}
            >
              <Button
                variant="text"
                className="custom-button"
                sx={{ whiteSpace: "nowrap" }}
                onClick={() => navigate("/")}
              >
                HOME
              </Button>
              <Button
                variant="text"
                className="custom-button"
                sx={{ whiteSpace: "nowrap" }}
                onClick={() => navigate("/notes")}
              >
                Notes Module
              </Button>

              {/* <Box>
                <Button
                  className="custom-button"
                  variant="text"
                  onClick={() => navigate("/add-note-module")}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Add Note Module
                </Button>
              </Box> */}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Index;
