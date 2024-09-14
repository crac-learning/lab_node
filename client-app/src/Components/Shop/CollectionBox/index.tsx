import { Box, Typography } from "@mui/material";

type Props = {
  name: string;
  banner: string;
};

function CollectionBox({ name, banner }: Props) {
  return (
    <Box
      className="collection h-72 relative hover:animate-zoom"
      sx={{
        background: `url('${banner}')`,
        backgroundSize: "auto 100%",
        transition: "1s ease all",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-purple-250 z-1" />
      <Typography
        sx={{
          fontFamily: "gilroy500",
          lineHeight: {
            xs: "58px",
          },
          fontSize: {
            xs: "3rem",
          },
          position: "absolute",
          bottom: "10px",
          left: 0,
          right: 0,
          color: "#F6DBA7",
          mx: "auto",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}

export default CollectionBox;
