import React from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const notes = useSelector((state) => state.reactNotes);
  console.log(notes, "sdlkfjasdlkj");
  return notes.loading
    ? "loading..."
    : Array.isArray(notes.data) && notes.data.length > 0
    ? notes.data.map((note) => <div>{note.note}</div>)
    : "no notes found";
};

export default Index;
