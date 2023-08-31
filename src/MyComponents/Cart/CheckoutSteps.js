import React, { Fragment } from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
// import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
// import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Loading from "../layout/Loader/Loader.js"
import "./CheckoutSteps.css";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      // icon: <LocalShippingIcon />,
      icon:  <i class="fa-solid fa-truck-fast"></i> ,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      // icon: <LibraryAddCheckIcon />,
      icon:  <i class="fa-solid fa-circle-check"></i>  ,
    },
    {
      label: <Typography>Payment</Typography>,
      icon:  <i class="fa-solid fa-sack-dollar"></i>  ,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

export default CheckoutSteps;
