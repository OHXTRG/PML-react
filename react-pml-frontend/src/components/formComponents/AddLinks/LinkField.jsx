import { styled, TextField, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "10px",
  "& label": {
    color: theme.palette.grey[700],
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInputBase-root": {
    borderRadius: 8,
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiInputAdornment-root": {
      "&:hover": {
        cursor: "pointer",
      },
    },
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

const LinkField = ({ setLinks, id, value, key }) => {
  const updateMap = () => {
    setLinks((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.delete(id);
      return newMap;
    });
  };

  const handleOnChange = (e) => {
    setLinks((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.set(id, e.target.value);
      return newMap;
    });
  };
  return (
    <>
      <StyledTextField
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <CloseIcon onClick={updateMap} />
              </InputAdornment>
            ),
          },
        }}
        data-id={id}
        value={value}
        onChange={handleOnChange}
        key={key}
      />
    </>
  );
};

export default LinkField;
