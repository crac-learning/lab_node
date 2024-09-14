import { Typography } from "@mui/material";

function HeadingText({ text }: { text: string }) {
  return (
    <Typography
      sx={{
        fontFamily: "gilroy600",
        fontWeight: 400,
        lineHeight: {
          xs: "30px",
          xsm: "34px",
          sm: "38px",
          lg: "42px",
          xl: "50px",
        },
        fontSize: {
          xs: "2rem",
          xsm: "2.375rem",
          sm: "2.5rem",
          lg: "2.755rem",
          xl: "3rem",
        },
        color: "#0C0635",
        mx: "auto",
      }}
    >
      {text}
    </Typography>
  );
}

export default HeadingText;
