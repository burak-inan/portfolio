import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "RWU Online Library",
    description: `
        \u2022 The Online Library System is a fullstack application
        \u2022 Developed with Vite-ReactJs and Spring Boot
        \u2022 It has responsible, beatifull design
        \u2022 Provides a single page website thanks to react-router-dom to manage books, movies, members, and borrowing transactions in a library.
        \u2022 Deployed with Docker
      `,
    url: `https://github.com/burak-inan/Private-Projects/tree/main/Online%20Library`,  
    imageSrc: "/assets/images/rwu-online-library.webp",
  },
  {
    title: "IT Pro Campus",
    description: `
        \u2022  IT Pro Campus is a fullstack student management system project. 
        \u2022  It aims to provide a user-friendly interface for managing various entities within an educational institution.
        \u2022  The ReactJS frontend seamlessly integrates with the Spring Boot backend, providing administrators, teachers, and students with a comprehensive set of features for the Student Management System.
        \u2022  Deployed with Docker.
    `,
    url: `https://github.com/burak-inan/Private-Projects/tree/main/Student%20Management%20System`,
    imageSrc: "/assets/images/it-pro-campus.webp",
  },
  {
    title: "Reactive Programming",
    description: `
        \u2022  Developed a Spring Boot project with WebFlux and R2DBC for reactive database interactions.
        \u2022  Gained insights into reactive programming nuances and the importance of SQL knowledge in this evolving landscape.
        \u2022  Implemented manual creation of database schemas due to limitations in automatic schema generation for reactive databases.
        \u2022  Established endpoints using both bean-based routing and traditional methods, providing flexibility in API design.
    `,
    url: `https://github.com/burak-inan/reactive-programming/tree/main`,
    imageSrc: "/assets/images/reactive-programming.webp",
  },
  {
    title: "ContextAPI Shopping",
    description:`
        \u2022 Created a responsive single-page shopping app with ReactJS. 
        \u2022 Implemented a central context for efficient state management, enabling users to add items to their cart and navigate it effortlessly. 
        \u2022 Utilized local storage for persistent item storage, providing users with a seamless experience across visits. 
        \u2022 The app remembers user activity even after days, offering a personalized and user-friendly shopping experience.
    `,
    url: `https://github.com/burak-inan/ContextAPI-add-to-cart`,
    imageSrc: "/assets/images/context-api-shopping.webp",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
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
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
