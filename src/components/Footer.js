import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#805AD5">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="#E4F8D5"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Michael Dixon Jr. • © 2022</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
