import { Typography } from "@mui/material";

function BodyText({ text }: { text: string }) {
  return (
    <Typography
      sx={{
        fontFamily: "gilroy400",
        fontWeight: 400,
        lineHeight: {
          xs: "20px",
          xsm: "24px",
          sm: "28px",
          lg: "32px",
          xl: "40px",
        },
        fontSize: {
          xs: "0.75rem",
          xsm: "0.75rem",
          sm: "1rem",
          lg: "1.255rem",
          xl: "1.5rem",
        },
        color: "#0C0635",
        mx: "auto",
      }}
    >
      {text}
    </Typography>
  );
}

export default BodyText;
