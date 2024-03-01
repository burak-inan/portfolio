import React from "react";
import { Avatar, Box, Flex, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Burak!";
const bio1 = "A Fullstack Developer";
const bio2 = `Specialised tech stacks:`;
const skills1 = `
                Java
                Spring 
                PostgreSQL
                MongoDB
                Microservices
                Docker
                SDLC`;
const skills2 = `
                JavaScript
                ReactJs
                Redux                 
                Bootstrap
                Sass
                NextJs
                TypeScript`;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = ({minWidth}) => {

  const heihgt= window.screen.height> 850 ? "100vh" : "850px"

  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    minWidth={minWidth}
    minHeight={heihgt}
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src="assets/images/avatar.jpeg" size="2xl" />
        <Heading size="md">{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading size="2xl">{bio1}</Heading>
        <Heading>{bio2}</Heading>
        <Flex width="55%" justify="space-between">
          <Box fontSize="xl" style={{ whiteSpace: "pre-line" }}>
            {skills1}
          </Box>
          <Box fontSize="xl" style={{ whiteSpace: "pre-line" }}>
            {skills2}
          </Box>
        </Flex>
      </VStack>
    </VStack>
  </FullScreenSection>
)};

export default LandingSection;
