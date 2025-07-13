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
    onSubmit: async (values) => {
      // console.log("form submited ", values);
      // try {
      //   setLoading(true);
      //   const data = await createNote(values);
      //   // console.log(data, "jdslfjsadf api repsonse");
      //   if (data.success) {
      //     toast.success(data.message);
      //   } else {
      //     toast.error(data.message);
      //   }
      // } catch (error) {
      //   console.log(error, "kdsjflkasdjflk error in catch");
      //   toast.error("!error");
      // } finally {
      //   setLoading(false);
      // }
    },
  });
  return (
    <>
      <Header />
      <Box>
        {/* <CustomAutoComplete options={[]} formik={formik} /> */}
        <Textfield />
        <Button onClick={() => navigate("addNotes")}>Add Notes</Button>
      </Box>
      <NotesComponents />
    </>
  );
};

export default Home;
