import React from "react";
import { Outlet } from "react-router";
import { Box, Container } from "@mui/material";
import Sidebar from "../../components/SideBar/Index";

const NoteModulesLayout = () => {
  return (
    <>
      <Box className="flex h-full overflow-auto">
        <Box className="w-[200px] h-full">
          <Sidebar />
        </Box>
        <Box className="grow h-full overflow-auto">
          <Container>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default NoteModulesLayout;
