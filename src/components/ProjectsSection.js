import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import MyCard from "./MyCard";

const projects = [
  {
    title: "React Portfolio",
    description:
      "My first portfolio website, built with React.js! ",
    getImageSrc: () => require("../images/projectscreenshot1.png"),
    url: "https://michael-dixonjr.github.io/react-portfolio/",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "A landing page for a restaurant, built with just HTML and CSS",
    getImageSrc: () => require("../images/projectscreenshot2.png"),
    url: "https://michael-dixonjr.github.io/LittleLemonLanding/index.html",
  },
  {
    title: "Cocky Chatbot🔥️",
    description:
      "Yggi the AI chatbot is a condescending AI chatbot with a superiority complex. Built using HTML, CSS, and Vanilla JavaScript",
    getImageSrc: () => require("../images/projectscreenshot3.png"),
    url: "https://askyggi.vercel.app/",
  },
  {
    title: "React Portfolio",
    description:
      "My second portfolio website, built with React.js and Chakra UI!",
    getImageSrc: () => require("../images/projectscreenshot4.png"),
    url: "#",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundImage={`url(${require("../images/DALLE4.png")})`}
      color="#681C81"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <MyCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            href={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
