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
          <Button
            variant="text"
            className="custom-button"
            onClick={() => navigate("/")}
          >
            Notes
          </Button>

          {/* <Box>
            <Button
              className="custom-button"
              variant="text"
              onClick={() => navigate("/react-notes")}
            >
              React Notes
            </Button>
          </Box> */}

          {noteModules.loading
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
                  >
                    {module.title}
                  </Button>
                </Box>
              ))
            : null}

          <Box>
            <Button
              className="custom-button"
              variant="text"
              onClick={() => navigate("/add-note-module")}
            >
              Add Note Module
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Index;
