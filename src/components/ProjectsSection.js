import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Pepolon",
    description:`
      \u2022 Pepolon is a Job application platform. 
      \u2022 Developed with NextJs and Spring Boot
      \u2022 It has responsible, beatifull design
      \u2022 Provides a single page website.
      \u2022 Integrated with cloud and mail services.
      \u2022 Allows the files of the users to be stored in the cloud.
      \u2022 Deployed with Docker and Kubernetes
      \u2022 Automated with CI/CD
    `,
    liveDemoUrl: `https://pepolon.com`, 
    githubUrl: `https://github.com/burak-inan/Private-Projects/tree/main/Pepolon`,
    imageSrc: "/assets/images/pepolon.webp",
  },
  {
    title: "RWU Online Library",
    description: `
        \u2022 The Online Library System is a fullstack application
        \u2022 Developed with Vite-ReactJs and Spring Boot
        \u2022 It has responsible, beatifull design
        \u2022 Provides a single page website thanks to react-router-dom to manage books, movies, members, and borrowing transactions in a library.
        \u2022 Deployed with Docker
      `,
    liveDemoUrl: `https://rwuonlinelibrary.vercel.app/`, 
    githubUrl: `https://github.com/burak-inan/Private-Projects/tree/main/Online%20Library`,     
    imageSrc: "/assets/images/rwu-online-library.webp",
  },
  {
    title: "Student Management System",
    description: `
        \u2022  Student Management System is a fullstack student management system project. 
        \u2022  It aims to provide a user-friendly interface for managing various entities within an educational institution.
        \u2022  The ReactJS frontend seamlessly integrates with the Spring Boot backend, providing administrators, teachers, and students with a comprehensive set of features for the Student Management System.
        \u2022  Deployed with Docker.
    `,
    liveDemoUrl: `https://managementonschools.com/`, 
    githubUrl: `https://github.com/burak-inan/Private-Projects/tree/main/Student%20Management%20System`,
    imageSrc: "/assets/images/student-management-system.webp",
  },
  {
    title: "Reactive Programming",
    description: `
        \u2022  Developed a Spring Boot project with WebFlux and R2DBC for reactive database interactions.
        \u2022  Gained insights into reactive programming nuances and the importance of SQL knowledge in this evolving landscape.
        \u2022  Implemented manual creation of database schemas due to limitations in automatic schema generation for reactive databases.
        \u2022  Established endpoints using both bean-based routing and traditional methods, providing flexibility in API design.
    `,
    githubUrl: `https://github.com/burak-inan/reactive-programming/tree/main`,
    imageSrc: "/assets/images/reactive-programming.webp",
  },
];

const ProjectsSection = ({minWidth}) => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      minWidth={minWidth}
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
            githubUrl={project.githubUrl}
            liveDemoUrl={project.liveDemoUrl}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
