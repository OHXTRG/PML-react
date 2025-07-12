import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { generateRandomId } from "../../helper/commonFunction";
import Textfield from "../Textfiled";
import LinkField from "./LinkField";

const Index = ({ formik }) => {
  const [links, setLinks] = useState(new Map());

  const updateMap = () => {
    // console.log("clicked");
    setLinks((prevMap) => {
      //   console.log(prevMap, "kjdsflk");
      const newMap = new Map(prevMap);
      newMap.set(generateRandomId(), "");
      //   console.log(newMap, "new map mapk");
      return newMap;
    });
  };

  useEffect(() => {
    formik.setFieldValue(
      "impLinks",
      Array.from(links, ([key, value]) => value)
    );
  }, [links]);

  // console.log(
  //   links,
  //   "jldskfjladskjf;=>--------------------array form ",
  //   Array.from(links, ([key, value]) => ({ key, value }))
  // );
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
          <LinkField key={obj.key} setLinks={setLinks} id={obj.key} />
        ))}
      </Box>
    </>
  );
};

export default Index;
