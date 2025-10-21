import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: theme.palette.grey[700],
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },

  "& .MuiFormControl-root": {
    width: "100%",
  },

  "& .MuiInputBase-root": {
    borderRadius: 8,
    width: "100%",
  },
  "& .MuiInputBase-input": {
    padding: "10px 14px",
  },
  "& .MuiOutlinedInput-root": {
    padding: 0,
    "& fieldset": {
      borderColor: theme.palette.grey[400],
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default StyledTextField;
