import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  const visitGitHub = () => {
    window.location = "https://github.com/ROHITvisuals";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              // src="https://media.licdn.com/dms/image/D4D35AQGTaP-U6Kq1jA/profile-framedphoto-shrink_100_100/0/1670928622272?e=1690912800&v=beta&t=s-olIohVSieXVTrdpA4BfiwkkjxNzk8xzbgori52Ed0"
              // src="https://64cbb5c9b759fc01b362ca31--comforting-blancmange-c845e2.netlify.app/296797380_602897224539089_5669174717627555083_n.jpeg"
              src="https://64cbb5c9b759fc01b362ca31--comforting-blancmange-c845e2.netlify.app/296797380_602897224539089_5669174717627555083_n.jpeg"
              alt="Founder"
            />
            <Typography>Rohit Verma</Typography>
            <Button onClick={visitGitHub} color="primary">
              Visit GitHub
            </Button>
            <span>
              This is an ECommerce wesbite made by @meRohitVerma. Only with the
              purpose to learn MERN Stack. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography className="our_brands" component="h2">Our Brands</Typography>

            <a href="https://github.com/ROHITvisuals" target="blank">
              {/* <GitHubIcon className="githubSvgIcon" /> */}
              <i class="fa-brands fa-github fa-2xl"></i>
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/rv171614/"
              target="blank"
            >
              {/* <LinkedInIcon className="linkedinSvgIcon" /> */}
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/rv171614/"
              target="blank"
            >
              {/* <LinkedInIcon className="linkedinSvgIcon" /> */}
              <i class="fa-brands fa-youtube fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
