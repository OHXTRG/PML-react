import React from "react";
import Header from "../Header/Index";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import SearchBar from "../ReactNotes/SearchBar";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Box className="appMain">
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default AppLayout;
