import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";

const Card = ({ title, description, imageSrc, githubUrl, liveDemoUrl }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack color="black" backgroundColor="white" borderRadius="xl">
      <Image borderRadius="xl" src={imageSrc} alt={title} w="full" />
      <VStack spacing={4} p={4} alignItems="flex-start" flex="1">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg" style={{ whiteSpace: "pre-line" }}>
          {description}
        </Text>
        <HStack color="blue.500" spacing={2} alignItems="center">
          <Link href={githubUrl} isExternal>
            See more <ExternalLinkIcon mx="2px" />
          </Link>
        </HStack>
        { liveDemoUrl &&
          <HStack color="blue.500" spacing={2} alignItems="center">
            <Link href={liveDemoUrl} isExternal>
              Go to live demo <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
        }
      </VStack>
    </VStack>
  );
};

export default Card;
