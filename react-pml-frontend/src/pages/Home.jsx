import React from "react";
import Header from "../components/Header/Index";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router";
import NotesComponents from "../components/NotesComponents/Index";
// import { CustomAutoComplete } from "../components/formComponents/CustomAutoComplete";
import Textfield from "../components/formComponents/Textfiled";
import { useFormik } from "formik";
import * as Yup from "yup";
const Home = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { search: "" },
    validationSchema: Yup.object({
      search: Yup.string().required("Fill the search"),
    }),
    onSubmit: async (values) => {},
  });
  return (
    <>
      {/* <Box>
        <Textfield />
        <Button onClick={() => navigate("addNotes")}>Add Notes</Button>
      </Box> */}
      {/* <NotesComponents /> */}
    </>
  );
};

export default Home;
