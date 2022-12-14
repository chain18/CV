import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Center,
  ChakraProvider,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/great-vibes/400.css";
import "@fontsource/fragment-mono/400.css";
import theme from "../configs/theme";

function AboutMe() {
  return (
    <Flex
      theme={theme}
      bgColor="#8CB1BB"
      backgroundImage="url('/img/skyAbout.svg')"
    >
      <Flex>
        <Image
          src="img/Group 20.svg"
          alt="Chain"
          position="absolute"
          boxSize={{ xl: "40%", "2xl": "35%" }}
          mt={{ xl: "-10%", "2xl": "-1%" }}
          left={{ xl: "2%", "2xl": "5%" }}
        />

        <Box
          mt={{ xl: "8%", "2xl": "15%" }}
          mb={{ xl: "8%", "2xl": "5%" }}
          bg="white"
          color="gold"
          border="2px"
          borderRadius="10px"
          shadow="2xl"
          ml="45%"
          position="relative"
          right={{ xl: "10%", "2xl": "10%" }}
        >
          <Flex flexDirection="column" m="5%">
            <Center>
              <Heading fontSize="50px" variant="heading" mb="2%" color="black">
                About Me!
              </Heading>
            </Center>
            <Text
              color="black"
              fontSize="18px"
              fontFamily={{ body: "Fragment Mono" }}
              style={{ textIndent: 50 }}
            >
              Let me introduce myself. My name is Thanakit.My nickname is Chain.
              I'm 26 years old. My birthday is the 18th of March 1996.I have
              graduated bachelor's degree from Suan Dusit University, in a major
              of Faculty of Fine and Applied Arts in Home Economics .with strong
              knowledge fields in all food and service. I have worked as a
              personal chef assistant. My main responsible for preparing and
              serving all the food items for the buffet menu according to the
              hotel's recipes and standards. I currently have a strong passion
              for software development. So I joined the Tech Up Bootcamp, and I
              have become a full-stack Developer now.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default AboutMe;
