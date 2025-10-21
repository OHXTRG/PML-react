import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../components/Layouts/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchNoteModules } from "../actions/noteModuleAction";
import NotesLayout from "../pages/NoteModule/Notes/Layout";
import NotesIndex from "../pages/NoteModule/Notes/Index";
import AddNotes from "../pages/NoteModule/Notes/AddNotes";
import EditNotes from "../pages/NoteModule/Notes/EditNote";
import AddNoteModule from "../pages/AddNoteModule";
import NoteModulesLayout from "../components/Layouts/NoteModulesLayout";
import NoteModuleIndex from "../pages/NoteModule/Index";
const Index = () => {
  const dispatch = useDispatch();
  const noteModules = useSelector((state) => state.noteModules);
  useEffect(() => {
    dispatch(fetchNoteModules());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="Notes" element={<NoteModulesLayout />}>
            <Route index element={<NoteModuleIndex />} />
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
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Index;
