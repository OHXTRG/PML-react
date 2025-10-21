import React from "react";
import { Outlet } from "react-router";

const ReactNotesLayout = ({ noteModule }) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ReactNotesLayout;
