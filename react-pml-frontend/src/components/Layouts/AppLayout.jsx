import React from "react";
import Header from "../Header/Index";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import Sidebar from "../SideBar/Index";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Box className="appMain flex">
        {/* <Box className="w-[200px] h-full">
          <Sidebar />
        </Box>
        <Box className="grow h-full overflow-auto"> */}
        <Container>
          <Outlet />
        </Container>
        {/* </Box> */}
      </Box>
    </>
  );
};

export default AppLayout;
