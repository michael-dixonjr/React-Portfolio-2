import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  const { backgroundImage, ...restProps } = boxProps;

  return (
    <VStack
      backgroundColor={restProps.backgroundColor}
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      color={isDarkBackground ? "white" : "black"}
      maxWidth={restProps.maxWidth}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...restProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
