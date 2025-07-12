import React from "react";
import Header from "../components/Header/Index";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import NotesComponents from "../components/NotesComponents/Index";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Button onClick={() => navigate("addNotes")}>Add Notes</Button>
      <NotesComponents />
    </>
  );
};

export default Home;
