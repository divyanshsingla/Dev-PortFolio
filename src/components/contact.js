import React from "react";
import styled from "styled-components";
import { Button, ThemeProvider, createMuiTheme } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Lottie from "react-lottie";
import animationData from "../lottie/37147-contact-us.json";
import { Hidden } from "react-grid-system";
import { purple } from "@material-ui/core/colors";
const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidyMid slice",
    },
  };

  const theme = createMuiTheme({
    palette: {
      secondary: purple,
    },
  });

  return (
    <ContactSec>
      <Hidden sm md>
        <span className="contactSvg">
          <Lottie options={defaultOptions} height={250} width={250} />
        </span>
      </Hidden>
      <ContactHeader>Contact</ContactHeader>
      <ContactButton>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            href="mailto: divyanshsingla911@gmail.com"
            color="secondary"
            startIcon={<MailIcon />}
            size="large"
          >
            mail
          </Button>
        </ThemeProvider>
        <Button
          variant="contained"
          href="https://www.linkedin.com/in/divyansh-singla-5a3015210/"
          color="secondary"
          target="_blank"
          startIcon={<LinkedInIcon />}
          style={{ margin: "0rem 1rem" }}
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          href="https://github.com/divyanshsingla"
          color="secondary"
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          github
        </Button>
      </ContactButton>
    </ContactSec>
  );
};

export default Contact;

// ----------STYLED COMPONENTS------------

const ContactSec = styled.div``;

const ContactHeader = styled.h1`
  text-align: center;
  color: whitesmoke;
`;

const ContactButton = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;
