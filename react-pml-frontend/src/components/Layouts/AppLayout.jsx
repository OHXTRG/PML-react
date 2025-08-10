import React from "react";
import Header from "../Header/Index";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box className="appMain">
        {/* {children} */}
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default AppLayout;
