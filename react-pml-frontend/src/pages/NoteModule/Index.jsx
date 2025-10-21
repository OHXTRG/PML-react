import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div>
      The note module index page
      <Box>
        <Button
          className="custom-button"
          variant="text"
          onClick={() => navigate("add-note-module")}
          sx={{ whiteSpace: "nowrap" }}
        >
          Add Note Module
        </Button>
      </Box>
    </div>
  );
};

export default Index;
