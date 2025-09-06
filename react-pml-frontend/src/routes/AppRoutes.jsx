import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../components/Layouts/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTags } from "../actions/allTagActions";
import { fetchNotesData } from "../actions/notesActions";
import { fetchNoteModules } from "../actions/noteModuleAction";
import ReactNotesLayout from "../pages/React/Layout";
import ReactNotesIndex from "../pages/React/Index";
import AddReactNotes from "../pages/React/AddNotes";
import EditReactNote from "../pages/React/EditNote";
import NotesLayout from "../pages/Notes/Layout";
import NotesIndex from "../pages/Notes/Index";
import AddNotes from "../pages/Notes/AddNotes";
import EditNotes from "../pages/Notes/EditNote";
import AddNoteModule from "../pages/AddNoteModule";
const Index = () => {
  const dispatch = useDispatch();
  const noteModules = useSelector((state) => state.noteModules);
  useEffect(() => {
    // dispatch(fetchAllTags());
    // dispatch(fetchNotesData());
    dispatch(fetchNoteModules());
  }, []);

  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="add-note-module" element={<AddNoteModule />} />

          {noteModules.loading
            ? "...loading"
            : Array.isArray(noteModules.data) && noteModules.data.length > 0
            ? noteModules.data.map((module) => (
                <Route
                  path={`notes/${module.title.trim().split(" ").join("")}`}
                  element={
                    <NotesLayout
                      noteModule={module.title.trim().split(" ").join("")}
                    />
                  }
                >
                  <Route
                    index
                    element={
                      <NotesIndex
                        noteModule={module.title.trim().split(" ").join("")}
                      />
                    }
                  />
                  <Route
                    path="add-note"
                    element={
                      <AddNotes
                        noteModule={module.title.trim().split(" ").join("")}
                      />
                    }
                  />
                  <Route
                    path="edit-note/:id"
                    element={
                      <EditNotes
                        noteModule={module.title.trim().split(" ").join("")}
                      />
                    }
                  />
                </Route>
              ))
            : null}
          {/* <Route path="react-notes" element={<ReactNotesLayout />}>
            <Route index element={<ReactNotesIndex />} />
            <Route path="add-react-notes" element={<AddReactNotes />} />
            <Route path="edit-react-notes/:id" element={<EditReactNote />} />
          </Route> */}
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default Index;
