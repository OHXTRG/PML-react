import React, { useState } from "react";
import Textfiled from "../formComponents/Textfiled";
import { useNavigate } from "react-router";
import { Button, Box } from "@mui/material";
import { useCustomContextHook } from "../../contextApi/context";
import { useSelector } from "react-redux";
import DeleteNoteModule from "../Modals/DeleteNoteModule";
import { deleteNoteModuleApi } from "../../apis/deleteNoteModuleApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchNoteModules } from "../../actions/noteModuleAction";

const SearchBar = ({ noteModule }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchKey, setSearchKey } = useCustomContextHook();
  const handleSearch = (event) => {
    setSearchKey({ key: event.target.value, noteModule });
  };
  const [deleteNoteModule, setDeleteNoteModule] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleDeleteModule = async (noteModule) => {
    try {
      setLoading(true);
      const { data } = await deleteNoteModuleApi(noteModule);
      if (data.success) {
        toast.success(data.message);
        dispatch(fetchNoteModules());
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error, "error in delete note module api");
      toast.error(error.message);
    } finally {
      setLoading(false);
      setDeleteNoteModule(false);
    }
  };

  return (
    <>
      <Box className="searchBar">
        <Box sx={{ display: "flex", flexGrow: "1" }}>
          <Box className="searchBox">
            <Textfiled
              fullWidth
              value={searchKey.key}
              placeholder="Search Notes"
              onChange={handleSearch}
            />
          </Box>
          <Button onClick={() => navigate(`add-note`)}>Add Notes</Button>
        </Box>
        <Button onClick={() => setDeleteNoteModule(true)} color="error">
          Discard {noteModule}
        </Button>
      </Box>
      <DeleteNoteModule
        open={deleteNoteModule}
        handleClose={setDeleteNoteModule}
        callBack={handleDeleteModule}
        callbackInput={{ noteModule }}
      />
    </>
  );
};

export default SearchBar;
