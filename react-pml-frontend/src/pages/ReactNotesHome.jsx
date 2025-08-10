import React from "react";
import NotesComponents from "../components/NotesComponents/Index";
// import { CustomAutoComplete } from "../components/formComponents/CustomAutoComplete";
import Textfield from "../components/formComponents/Textfiled";
import { Button, Box } from "@mui/material";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import SearchBar from "../components/ReactNotes/SearchBar";

const ReactNotesHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location, "loactionlkfjdsldslkl");
  const params = useParams();
  console.log(
    params,
    "---------------------------------------params of the page"
  );
  return (
    <>
      {params?.page == "add-react-notes" ? (
        <Outlet />
      ) : (
        <>
          <Box>
            {/* <Textfield /> */}
            <SearchBar />
          </Box>
          <NotesComponents />
        </>
      )}
    </>
  );
};

export default ReactNotesHome;
