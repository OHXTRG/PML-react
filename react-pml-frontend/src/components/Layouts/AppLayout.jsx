import React from "react";
import Header from "../Header/Index";
import { Box } from "@mui/material";
const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box className="appMain">{children}</Box>
    </>
  );
};

export default AppLayout;
