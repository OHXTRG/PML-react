import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyComponent({ formik }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    formik.setFieldValue("note", value);
  }, [value]);

  useEffect(() => {
    if (!value && formik.values.note) {
      setValue(formik.values.note);
    }
  }, [formik.values.note]);

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue}></ReactQuill>
  );
}

export default MyComponent;
