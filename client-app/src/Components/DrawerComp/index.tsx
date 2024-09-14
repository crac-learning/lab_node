import { useState } from "react";
import { Step, StepLabel, Stepper, Drawer, Box } from "@mui/material";
import { Props } from "./types";

import DefhawkLogo from "Assets/images/defhawk-logo.png";

function DrawerComp({ open, anchor, toggleDrawer, steps }: Props) {
  const [activeStep, setActiveStep] = useState(0);

  const setStepperActiveStep = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: "90vw",
          background: "#0C0635",
          position: "relative",
          paddingRight: "20px",
          border: "0 0",
        },
      }}
      open={open}
      anchor={anchor}
      onClose={toggleDrawer}
    >
      <Stepper
        sx={{ overflowY: "auto", marginTop: "20px", height: "60px" }}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map(({ label, key }) => (
          <Step key={key}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          borderLeft: 0,
          padding: "0 20px",
          marginTop: "20px",
          height: "calc(100% - 200px)",
          overflowY: "auto",
        }}
      >
        <div className="title text-2xl font-semibold mt-4 bg-gradient-to-r from-purple to-light-purple py-3 pl-4 rounded-md">
          {steps[activeStep].title}
        </div>
        <div
          className="content p-4 pt-1"
          dangerouslySetInnerHTML={{ __html: steps[activeStep].content }}
        ></div>
      </Box>

      <div className="absolute w-full text-center flex justify-center border-t mx-10 pt-8 bottom-5 bg-primary-main z-10 h-[80px]">
        <button
          onClick={() => setStepperActiveStep(activeStep - 1)}
          disabled={activeStep === 0}
          className={`w-32 bg-light-font font-semibold ${
            activeStep === 0 ? "opacity-30 text-slate-500" : "text-primary-main"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => setStepperActiveStep(activeStep + 1)}
          disabled={activeStep === steps.length}
          className="w-32 bg-light-font text-primary-main font-semibold ml-10"
        >
          Next
        </button>
      </div>
      <img
        src={DefhawkLogo}
        alt="lines"
        className="absolute bottom-4 right-4 w-16 z-20"
      />
    </Drawer>
  );
}

export default DrawerComp;
