import React from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

const Index = () => {
  const noteModules = useSelector((state) => state.noteModules);
  const navigate = useNavigate();
  console.log("side bar side bar", noteModules);
  return (
    <Box className="w-full h-full overflow-auto">
      <Box className="w-full">
        {noteModules.loading
          ? "...loading"
          : Array.isArray(noteModules.data) && noteModules.data.length > 0
          ? noteModules.data.map((module) => (
              <Box>
                <Button
                  className="custom-button"
                  variant="text"
                  onClick={() =>
                    navigate(`notes/${module.title.trim().split(" ").join("")}`)
                  }
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {module.title}
                </Button>
              </Box>
            ))
          : null}
      </Box>
    </Box>
  );
};

export default Index;
