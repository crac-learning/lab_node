import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const TextInput = styled(TextField)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    position: "relative",
    backgroundColor: `#7ACB8F29 !important`,
    border: "0.5px solid #1F78FF",
    fontSize: "1rem",
    padding: "12px",
    transition: theme.transitions.create(["border-color"]),
    color: "#8D8D8D",
    "&:focus": {
      border: "0.5px solid #1F78FF",
    },
    "&:-internal-autofill-selected": {
      backgroundColor: `#7ACB8F29 !important`,
    },
    "&.Mui-disabled": {
      color: theme.palette.primary.main,
      WebkitTextFillColor: theme.palette.primary.main,
    },
  },
  "&.Mui-error .MuiInputBase-input": {
    borderColor: theme.palette.error.main,
  },
}));

export default TextInput;
