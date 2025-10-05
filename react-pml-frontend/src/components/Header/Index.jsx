import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Index = () => {
  const navigate = useNavigate();
  const noteModules = useSelector((state) => state.noteModules);
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
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
              Notes
            </Button>
            {/* {noteModules.loading
              ? "...loading"
              : Array.isArray(noteModules.data) && noteModules.data.length > 0
              ? noteModules.data.map((module) => (
                  <Box>
                    <Button
                      className="custom-button"
                      variant="text"
                      onClick={() =>
                        navigate(
                          `notes/${module.title.trim().split(" ").join("")}`
                        )
                      }
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      {module.title}
                    </Button>
                  </Box>
                ))
              : null} */}

            <Box>
              <Button
                className="custom-button"
                variant="text"
                onClick={() => navigate("/add-note-module")}
                sx={{ whiteSpace: "nowrap" }}
              >
                Add Note Module
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Index;
