import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: theme.palette.grey[700],
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInputBase-root": {
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  "& .MuiOutlinedInput-root": {
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
