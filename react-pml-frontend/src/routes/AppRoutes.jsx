import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddNotes from "../pages/AddNotes";
import AppLayout from "../components/Layouts/AppLayout";
import { useDispatch } from "react-redux";
import { fetchAllTags } from "../actions/allTagActions";
import { fetchNotesData } from "../actions/notesActions";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTags());
    dispatch(fetchNotesData());
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/addNotes"
          element={
            <AppLayout>
              <AddNotes />
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
};

export default Index;
