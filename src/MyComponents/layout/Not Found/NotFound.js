import React from "react";
// import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
// import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      {/* <ErrorIcon /> */}
      <i class="fa-solid fa-xmark fa-2xl"></i>


      {/* <Typography>Page Not Found </Typography> */}
      <h1>Page Not Found </h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
