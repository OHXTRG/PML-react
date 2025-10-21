import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getNote } from "../../../apis/getNote";
import {
  Box,
  Button,
  Typography,
  FormHelperText,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import Textfield from "../../../components/formComponents/Textfiled";
import Editor from "../../../components/Editor/MyEditor";
import AddLinks from "../../../components/formComponents/AddLinks/Index";
import CustomAutoComplete from "../../../components/formComponents/CustomAutoComplete";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { updateNote } from "../../../apis/updateNote";
import { toast } from "react-toastify";

const EditReactNote = ({ noteModule }) => {
  const params = useParams();
  const id = params.id;
  const allTags = useSelector((state) => state.allTags);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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
    onSubmit: async (value) => {
      try {
        setLoading(true);
        value.id = id;
        const res = await updateNote(value, noteModule);
        if (res.success) {
          toast.success(res.message);
          navigate(`/notes/${noteModule}`);
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        toast.error("!error");
      } finally {
        setLoading(false);
      }
    },
  });

  const setNote = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const data = await getNote(id, noteModule);
        console.log(data.data, "jflakdsjflksj");
        if (data.success) {
          formik.setFieldValue("title", data.data.title);
          formik.setFieldValue("note", data.data.note);
          formik.setFieldValue("tags", data.data.tags);
          formik.setFieldValue("impLinks", data.data.impLinks);
          setLoading(false);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log("error , ", error);
        toast.error("!error");
      } finally {
        setLoading(false);
      }
    },
    [id]
  );

  useEffect(() => {
    // setLoading(true);
    setNote(id);
  }, []);

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
          <Typography component="h3">Edit Notes</Typography>
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

              <Button type="submit">Edit Note</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default EditReactNote;
