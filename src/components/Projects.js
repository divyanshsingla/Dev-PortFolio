import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@material-ui/icons/GitHub";
import { motion } from "framer-motion";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import "animate.css/animate.min.css";
import Zoom from "react-reveal/Zoom";

const Projects = () => {
  return (
    <ProjectPage>
      <ProjectTitle>Projects</ProjectTitle>
      <Zoom>
        <ProjectCard>
          <ProjectDetail>
            <h2>Dev Chat</h2>
            <p>
            A Socket.io based Web app to communicate between developers in
             public channel or you can create your own room for private sessions 
             among yourselves.This is done in collaboration.
            </p>
            <CardButton>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/divyanshsingla/Dev-Chat"
                target="_blank"
                startIcon={<GitHubIcon />}
              >
                Github
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="https://dev-chat-gamma.vercel.app/"
                target="_blank"
                startIcon={<VideoLabelIcon />}
                style={{ margin: "1rem 1rem" }}
              >
                Live Preview
              </Button>
            </CardButton>
          </ProjectDetail>
          <ProjectPreview>
            <motion.img
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              src="https://user-images.githubusercontent.com/70953098/121433916-3a963080-c99a-11eb-8e47-3812d009d0c4.png"
              alt="project_preview"
            />
            <CardSVg>
              <FontAwesomeIcon icon={["fab", "js"]} />
              <FontAwesomeIcon icon={["fab", "react"]} />
              <FontAwesomeIcon icon={["fab", "html5"]} />
            </CardSVg>
          </ProjectPreview>
        </ProjectCard>
      </Zoom>
      <Zoom>
        <ProjectCard>
          <ProjectDetail>
            <h2>Share Secrets</h2>
            <p>
              A Node JS based Web app to share your Secrets on the Web anonymously.
              User can register to this website and all the users have been authorized 
              using their Google and Facebook accounts.
            </p>
            <CardButton>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/divyanshsingla/Secrets-Web-App"
                target="_blank"
                startIcon={<GitHubIcon />}
              >
                Github
                </Button>
            </CardButton>
          </ProjectDetail>
          <ProjectPreview>
            <motion.img
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              src="https://user-images.githubusercontent.com/98897310/183004511-7099fd3e-7816-44ef-baa5-60e2457d5ad3.png"
              alt="project_preview"
            />
            <CardSVg>
              <FontAwesomeIcon icon={["fab", "js"]} />
              <FontAwesomeIcon icon={["fab", "react"]} />
              <FontAwesomeIcon icon={["fab", "html5"]} />
            </CardSVg>
          </ProjectPreview>
        </ProjectCard>
      </Zoom>
      <Zoom>
        <ProjectCard>
          <ProjectDetail>
            <h2>Mini Tube</h2>
            <p>
              A Youtube-API based Web app where you can search the video and
              from the top 5 results you can select the video to your own
              accord.
            </p>
            <CardButton>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/divyanshsingla/mini-tube"
                target="_blank"
                startIcon={<GitHubIcon />}
              >
                Github
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="https://a-micro-youtube.netlify.app/"
                target="_blank"
                startIcon={<VideoLabelIcon />}
                style={{ margin: "1rem 1rem" }}
              >
                Live Preview
              </Button>
            </CardButton>
          </ProjectDetail>
          <ProjectPreview>
            <motion.img
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              src="https://user-images.githubusercontent.com/70953098/121435069-ee4bf000-c99b-11eb-8710-fcf387db9558.png"
              alt="project_preview"
            />
            <CardSVg>
              <FontAwesomeIcon icon={["fab", "js"]} />
              <FontAwesomeIcon icon={["fab", "react"]} />
              <FontAwesomeIcon icon={["fab", "html5"]} />
            </CardSVg>
          </ProjectPreview>
        </ProjectCard>
      </Zoom>
    </ProjectPage>
  );
};

export default Projects;

//STYLE

const ProjectPage = styled.div`
  margin: 7rem;
  @media (max-width: 900px) {
    margin: 2rem;
  }
`;

const ProjectTitle = styled.h1`
  text-align: center;
  color: snow;
  margin-top: 5rem;
`;

const ProjectCard = styled.div`
  position: relative;
  background: #2e2e2e;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: white;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectDetail = styled.div`
  padding: 50px;
  border-radius: 10px;
  min-height: 350px;
  width: 90%;
  p {
    line-height: 170%;
    min-height: 250px;
  }
  h2 {
    margin-bottom: 25px;
    font-family: "poppins";
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
  }
`;

const ProjectPreview = styled.div`
  position: relative;
  img {
    border-radius: 20px;
    width: 90%;
    height: auto;
  }
  @media (max-width: 1280px) {
    margin-top: 1rem;
    left: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.3rem;
    left: 1rem;
  }
`;

const CardButton = styled.div`
  @media (max-width: 900px) {
    margin-top: 0.3rem;
    display: grid;
  }
`;

const CardSVg = styled(motion.div)`
  svg {
    color: #6d83f2;
    margin-left: 1rem;
    font-size: 24px;
  }
  svg:hover {
    color: #ab42f1;
    cursor: pointer;
    transition: color 1s ease-in-out;
  }
  margin-top: 0.2rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
