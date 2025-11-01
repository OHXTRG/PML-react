import {
  Box,
  Typography,
  Button,
  FormHelperText,
  Backdrop,
} from "@mui/material";
import React, { useState } from "react";
import Textfield from "../components/formComponents/Textfiled";
import { useFormik } from "formik";
import { Description } from "@mui/icons-material";
import * as Yup from "yup";
import { addNoteModule } from "../apis/addNoteModule";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchNoteModules } from "../actions/noteModuleAction";
import { useNavigate } from "react-router";

const AddNoteModule = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .test(
          "valid-title",
          "Please enter the Title that do not inclue special characters and white spaces",
          (value, testContext) =>
            value.match(/[.*+?^$&@!~`=,':"{}()|[\]\\\s]/g) == null
        )
        .test(
          "valid-collection-name",
          "Please enter 'es' at the end of the collection name",
          (value, testcontext) => value.trim().slice(value.length - 2) == "es"
        ),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values, "the new note module values ");
      try {
        setLoading(true);
        const payloadValues = {
          title: values.title.toLowerCase(),
          description: values.description,
        };
        const data = await addNoteModule(payloadValues);
        if (data.success) {
          toast.success(data.message);
          dispatch(fetchNoteModules());
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error, "error in add note module api");
        toast.error("error!!!");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      />
      <Box className="AddNoteModuleWrapper">
        <form onSubmit={formik.handleSubmit}>
          <Typography component={"h2"}>Add Note Module</Typography>
          <Box className="form-control">
            <Typography component="p">Title</Typography>
            <Textfield
              name="title"
              placeholder="Add Title"
              fullWidth={true}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.title}
              </FormHelperText>
            ) : (
              ""
            )}
          </Box>

          <Box className="form-control">
            <Typography component="p">Description</Typography>
            <Textfield
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              placeholder="Add Some Description"
              rows={3}
              multiline={true}
              fullWidth={true}
            />
            {formik.touched.description && formik.errors.description ? (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.description}
              </FormHelperText>
            ) : (
              ""
            )}
          </Box>

          <Button type="submit">Create Note Module</Button>
        </form>
      </Box>
    </>
  );
};

export default AddNoteModule;
