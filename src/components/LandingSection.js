import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarpic from "../images/avatarpic.JPG"

const greeting = "My name is Michael Dixon Jr.";
const bio1 = "I'm a frontend web developer";
const bio2 = "specialized in React!";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundImage={`url(${require("../images/DALLE3.png")})`}
    color="#681C81"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" src={avatarpic} />
      <Heading as="h1" size="2xl"> {greeting} </Heading> 
      <Heading as="h2" size="lg"> {bio1} </Heading>
      <Heading as="h2" size="lg"> {bio2} </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
