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
    <Box
      theme={theme}
      backgroundImage="url('/img/sky 1.svg')"
      bgColor="#A6BDCC"
    >
      <Navbar />
      <Flex>
        <Image
          src="img/Group 13.svg"
          w="100vw"
          top={{ "2xl": "8%" }}
          display="flex"
          position="absolute"
        />
        <Flex
          mt={{ "2xl": "5%", xl: "10%" }}
          ml={{ "2xl": "28%", xl: "26%" }}
          mb={{ "2xl": "20%", xl: "15%" }}
        >
          <Heading
            textAlign="center"
            display="flex"
            position="relative"
            color="gray.600"
            fontSize={{ base: "40px", lg: "5xl", xl: "6xl", "2xl": "75px" }}
          >
            Welcome <br></br> I'm Thanakit Thanasansopajan
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
