import React from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
const CustomAutoComplete = ({ options, formik }) => {
  //   console.log(options, "sdjlkfjl options");
  return (
    <div style={{ marginBottom: "20px" }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={options}
        defaultValue={[]}
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
          console.log(newValue, "jdslkfjadsl");
          formik.setFieldValue("tags", newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            // variant="filled"
            // label="freeSolo"
            placeholder="Add Tags"
          />
        )}
      />
    </div>
  );
};

export default CustomAutoComplete;
