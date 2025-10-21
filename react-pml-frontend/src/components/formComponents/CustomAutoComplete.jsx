import React from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
const CustomAutoComplete = ({ options, formik }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={options}
        value={formik.values.tags}
        freeSolo
        renderValue={(value, getItemProps) =>
          value.map((option, index) => {
            const { key, ...itemProps } = getItemProps({ index });
            return (
              <Chip
                variant="outlined"
                label={option}
                key={key}
                {...itemProps}
              />
            );
          })
        }
        onChange={(e, newValue) => {
          formik.setFieldValue("tags", newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Add Tags" />
        )}
      />
    </div>
  );
};

export default CustomAutoComplete;
