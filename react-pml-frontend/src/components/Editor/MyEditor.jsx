import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyComponent({ formik }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    // console.log(value);
    formik.setFieldValue("note", value);
  }, [value]);

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue}>
      {/* <div className="editor-div" /> */}
    </ReactQuill>
  );
}

export default MyComponent;
