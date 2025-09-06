import React, { useEffect } from "react";
import NotesComponents from "../../components/NotesComponents/Index";
import { useLocation, useNavigate, useParams } from "react-router";
import { Box } from "@mui/material";
import SearchBar from "../../components/ReactNotes/SearchBar";
import { useDispatch } from "react-redux";
import { fetchNotesData } from "../../actions/notesActions";

const ReactNotesHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotesData());
  }, []);
  return (
    <>
      <Box>
        <SearchBar />
      </Box>
      <NotesComponents />
    </>
  );
};

export default ReactNotesHome;
