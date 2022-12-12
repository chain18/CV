import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Center,
  ChakraProvider,
  Stack,
} from "@chakra-ui/react";
import "@fontsource/great-vibes/400.css";
import React from "react";
import Navbar from "../components/Nevbar";
import theme from "../configs/theme";

function Header() {
  return (
    <>
      <Box theme={theme}>
        <Flex h="60vh">
          <Flex position="absolute">
            <Image
              display="flex"
              src="img/sky 1.svg"
              w={{ "2xl": "100vw", xl: "100vw" }}
              h={{ "2xl": "100%", xl: "100%" }}
              bg="#8CB1BB"
            />
          </Flex>
          <Flex flexDirection="column" justifyContent="center" w="100%" mt="5%">
            <Image
              src="img/Group 13.svg"
              top="20px"
              w="100vw"
              display="flex"
              position="absolute"
            />
            <Heading
              textAlign="center"
              display="flex"
              position="relative"
              m={{ "2xl": "27%", xl: "25%", lg: "25%" }}
              mb={{ lg: "45%", xl: "35%" }}
              color="gray.600"
              fontSize={{ base: "40px", lg: "5xl", xl: "6xl", "2xl": "75px" }}
            >
              Welcome <br></br> I'm Thanakit Thanasansopajan
            </Heading>
          </Flex>
        </Flex>
      </Box>
      <Navbar />
    </>
  );
}

export default Header;
