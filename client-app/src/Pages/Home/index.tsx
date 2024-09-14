import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { LOGIN } from "Routes/constant";

import Banner from "Assets/images/home-banner.png";
import ReactLogo from "Assets/icons/react.svg";
import NodeLogo from "Assets/icons/node.svg";
import MongoLogo from "Assets/icons/mongo.svg";
import ArrowIcon from "Assets/icons/arrow.svg";
import LineBack from "Assets/icons/line-back.svg";
import DefhawkLogo from "Assets/images/defhawk-logo.png";

function Home() {
  return (
    <div className="bg-primary-main h-screen w-screen flex items-ceter">
      <div className="container m-auto h-fit">
        <img src={LineBack} alt="lines" className="absolute z-0" />
        <img
          src={DefhawkLogo}
          alt="lines"
          className="absolute bottom-10 right-10 w-28"
        />

        <div className="flex items-start gap-10 relative z-10">
          <div className="banner w-2/5">
            <img src={Banner} alt="web security" width="500px" />
          </div>
          <div className="text text-left w-3/5">
            <div className="heading">
              <Typography
                sx={{
                  fontFamily: "Gemunu Libre",
                  fontWeight: 700,
                  fontSize: {
                    sm: "1.2rem",
                    md: "1.6rem",
                    lg: "2rem",
                    xl: "2.2rem",
                  },
                  color: "#CCE0FF",
                }}
              >
                Cyber Compass
              </Typography>
            </div>
            <div className="title pt-4 pb-6">
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  lineHeight: {
                    xs: "28px",
                    xsm: "32px",
                    sm: "46px",
                    lg: "48px",
                    xl: "52px",
                  },
                  fontSize: {
                    xs: "1.1875rem",
                    xsm: "1.5rem",
                    sm: "1.875rem",
                    lg: "4rem",
                    xl: "4.25rem",
                  },
                }}
              >
                Web Security
              </Typography>
            </div>
            <div className="description pt-4">
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
                    xs: "1rem",
                    xsm: "1.375rem",
                    sm: "1.5rem",
                    lg: "1.755rem",
                    xl: "2rem",
                  },
                  color: "#D3F0DA",
                  mx: "auto",
                }}
              >
                A guided challenge series designed to equip you with essential
                security measures using ReactJS, NodeJS, and MongoDB.
              </Typography>
            </div>
            <div className="flex mt-8 gap-6">
              <div>
                <img src={ReactLogo} alt="react" />
              </div>
              <div>
                <img src={NodeLogo} alt="node" />
              </div>
              <div>
                <img src={MongoLogo} alt="mongo" />
              </div>
            </div>
            <div className="begin mt-16">
              <Link to={LOGIN}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #241F49 0%, #191341 100%)",
                    width: "fit-content",
                    padding: "20px 40px 20px 30px",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    borderRadius: "8px",
                    cursor: "pointer",
                    "&:hover": {
                      background:
                        "linear-gradient(180deg, #191341 0%, #241F49 100%)",
                    },
                  }}
                >
                  <div className="text">
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
                          xs: "1rem",
                          xsm: "1.375rem",
                          sm: "1.5rem",
                          lg: "1.755rem",
                          xl: "2rem",
                        },
                        color: "#D3F0DA",
                        mx: "auto",
                      }}
                    >
                      Begin Your Security Quest
                    </Typography>
                  </div>
                  <div className="arrow">
                    <img src={ArrowIcon} alt="arrow" />
                  </div>
                </Box>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
