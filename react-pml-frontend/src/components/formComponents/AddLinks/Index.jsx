import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { generateRandomId } from "../../helper/commonFunction";
import Textfield from "../Textfiled";
import LinkField from "./LinkField";

const Index = ({ formik }) => {
  const [links, setLinks] = useState(new Map());

  const updateMap = () => {
    setLinks((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.set(generateRandomId(), "");
      return newMap;
    });
  };

  useEffect(() => {
    formik.setFieldValue(
      "impLinks",
      Array.from(links, ([key, value]) => value)
    );
  }, [links]);

  useEffect(() => {
    if (links.size == 0 && formik.values.impLinks.length > 0) {
      setLinks(() => {
        const map = new Map();
        formik.values.impLinks.map((link) => {
          map.set(generateRandomId(), link);
        });
        return map;
      });
    }
  }, [formik.values.impLinks]);

  return (
    <>
      <Box>
        <Button onClick={updateMap}>
          <Add />
          Add Links
        </Button>
      </Box>
      <Box className="form-control">
        {Array.from(links, ([key, value]) => ({ key, value })).map((obj) => (
          <LinkField
            key={obj.key}
            setLinks={setLinks}
            id={obj.key}
            value={obj.value}
          />
        ))}
      </Box>
    </>
  );
};

export default Index;
