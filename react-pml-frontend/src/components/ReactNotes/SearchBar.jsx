import React from "react";
import Textfiled from "../formComponents/Textfiled";
import { useNavigate } from "react-router";
import { Button, Box } from "@mui/material";
const SearchBar = () => {
  const navigate = useNavigate();
  return (
    <Box className="searchBar">
      <Box className="searchBox">
        <Textfiled fullWidth />
      </Box>
      <Button onClick={() => navigate("add-react-notes")}>Add Notes</Button>
    </Box>
  );
};

export default SearchBar;
