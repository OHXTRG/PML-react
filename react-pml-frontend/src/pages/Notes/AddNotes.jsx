import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Typography,
  IconButton,
  Stack,
  styled,
  FormHelperText,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Add, Delete } from "@mui/icons-material";
import { useFormik } from "formik";
import Textfield from "../../components/formComponents/Textfiled";
import Editor from "../../components/Editor/MyEditor";
import AddLinks from "../../components/formComponents/AddLinks/Index";
import CustomAutoComplete from "../../components/formComponents/CustomAutoComplete";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { createNote } from "../../apis/createNote";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddNotes = ({ noteModule }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { title: "", note: "", tags: [], impLinks: [] },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      note: Yup.string().required("Note is required"),
      tags: Yup.array()
        .of(Yup.string().trim().min(1, "Tags can't be empty"))
        .min(1, "Alleast one tag is required")
        .required("Alleast one tag is required"),
      impLinks: Yup.array().of(
        Yup.string()
          .trim()
          .min(1, "links can't be empty")
          .required("Links can't be empty")
      ),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const data = await createNote(values, noteModule);
        if (data.success) {
          toast.success(data.message);
          navigate(`/notes/${noteModule}`);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error, "kdsjflkasdjflk error in catch");
        toast.error("!error");
      } finally {
        setLoading(false);
      }
    },
  });

  const allTags = useSelector((state) => state.allTags);

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box className="AddNotesForm">
        <Box className="wrapper">
          <Typography component="h3">Add Notes</Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box className="form-elements">
              {/* title  */}
              <Box className="form-control">
                <Typography component="p">Title</Typography>
                <Textfield
                  name="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  placeholder="Add Title"
                />
                {formik.touched.title && formik.errors.title ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {formik.errors.title}
                  </FormHelperText>
                ) : (
                  ""
                )}
              </Box>

              {/* notes  */}
              <Box className="form-control">
                <Typography component="p">Note</Typography>
                <Editor formik={formik} />
                {formik.touched.note && formik.errors.note ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {formik.errors.note}
                  </FormHelperText>
                ) : (
                  ""
                )}
              </Box>

              {/* tags  */}
              <CustomAutoComplete options={allTags.data} formik={formik} />
              {formik.touched.tags && formik.errors.tags ? (
                <FormHelperText sx={{ color: "red" }}>
                  {formik.errors.tags}
                </FormHelperText>
              ) : (
                ""
              )}

              {/* imp links */}
              <AddLinks formik={formik} />
              {formik.touched.impLinks && formik.errors.impLinks ? (
                <FormHelperText sx={{ color: "red" }}>
                  {formik.errors.impLinks}
                </FormHelperText>
              ) : (
                ""
              )}

              <Button type="submit">Create Note</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default AddNotes;
