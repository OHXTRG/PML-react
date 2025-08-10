import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddNotes from "../pages/AddNotes";
import AppLayout from "../components/Layouts/AppLayout";
import { useDispatch } from "react-redux";
import { fetchAllTags } from "../actions/allTagActions";
import { fetchNotesData } from "../actions/notesActions";
import ReactNotesHome from "../pages/ReactNotesHome";
const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTags());
    dispatch(fetchNotesData());
  }, []);
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="react-notes" element={<ReactNotesHome />}>
            <Route path=":page" element={<AddNotes />} />
          </Route>
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default Index;
