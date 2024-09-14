import { CallMadeRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

const SubmitButton = () => (
  <Button
    size="large"
    sx={{
      fontFamily: "gilroy500",
      bgcolor: "#0C0635",
      display: "flex",
      alignItems: "center",
      borderRadius: "2rem",
      height: { md: "3.2rem" },
      fontSize: { xs: "0.9rem", md: "1.25rem" },
      textTransform: "none",
      padding: {
        xs: "4px 18px",
        sm: "8px 22px",
      },
      ".MuiButton-endIcon": {
        ml: { xs: "4px", sm: "8px" },
      },
    }}
    variant="contained"
    type="submit"
    endIcon={
      <CallMadeRounded
        sx={{
          fontSize: {
            xs: "0.9rem !important",
            md: "1.25rem  !important",
          },
        }}
      />
    }
  >
    Submit
  </Button>
);

export default SubmitButton;
