import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const MyCard = ({ title, description, imageSrc, href }) => {
  return (
    <Card
      borderRadius={20}
      as="a"
      href={href}
      color="#E4F8D5"
      backgroundColor="#805AD5"
      transition="all 0.3s ease-in-out"
      _hover={{
        background: "#E4F8D5",
        color: "#805AD5",
        transform: "scale(1.05)",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <CardBody padding={0}>
        <Image src={imageSrc} borderRadius={20} />
        <Heading as="h3" size="md" padding={3}>
          {title}
        </Heading>
        <Text padding={3}>{description}</Text>
      </CardBody>
      <CardFooter>
        <HStack>
          <Text> See more </Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default MyCard;
