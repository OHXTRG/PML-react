import { useEffect } from "react";
import NotesComponents from "../../components/NotesComponents/Index";
import { Box } from "@mui/material";
import SearchBar from "../../components/ReactNotes/SearchBar";
import { useDispatch } from "react-redux";
import { fetchNotesData } from "../../actions/notesActions";
import { fetchAllTags } from "../../actions/allTagActions";

const ReactNotesHome = ({ noteModule }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotesData(noteModule));
    dispatch(fetchAllTags(noteModule));
  }, [noteModule]);
  return (
    <>
      <Box>
        <SearchBar noteModule={noteModule} />
      </Box>
      <NotesComponents noteModule={noteModule} />
    </>
  );
};

export default ReactNotesHome;
