import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Card, Carousel } from "antd";
import "@fontsource/great-vibes/400.css";
import "@fontsource/fragment-mono/400.css";
import theme from "../configs/theme";

const contentStyle = {
  position: "relative",
  height: "300px",
  width: "70vh",
  "margin-top": "11vh",
  "margin-bottom": "50px",
  "margin-left": "35vh",
  color: "black",
  background: "white",
  border: "2px solid gold",
  "border-radius": "20px 20px ",
  "box-shadow":
    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

function Education() {
  return (
    <Box theme={theme} bgImage="url('/img/goldSky2.svg')">
      {/* <Image
        src="img/goldSky.svg"
        w="100vw"
        display="flex"
        position="absolute"
        sx={{ zIndex: "0" }}
      /> */}
      <Image src="img/Group 22.svg" ml={{ "2xl": "35%", xl: "35%" }} />
      <Box ml={{ "2xl": "20vh" }} mt="-5%">
        <Carousel autoplay>
          <Box>
            <Box style={contentStyle}>
              <Image
                src="img/flowerBox.svg"
                display="flex"
                position="absolute"
                left="60%"
                bottom="-30%"
                sx={{ zIndex: "10" }}
              />
              <Image
                src="img/dove.svg"
                display="flex"
                position="absolute"
                bottom="100px"
                left="-200px"
              />
              <Flex>
                <Image src="img/sdu.svg" w="250" h="250" mt="25px" />
                <Text
                  fontSize="20px"
                  mt="25px"
                  style={{ textIndent: 40 }}
                  mr="10px"
                >
                  I started studying at Suan Dusit University in a major of
                  Faculty of Fine and Applied Arts in Home Economics in 2014 and
                  I have graduated bachelor's degree from Suan Dusit University,
                  in a major of Faculty of Fine and Applied Arts in Home
                  Economics with GPA: 3.00
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box>
            <Box style={contentStyle}>
              <Image
                src="img/flowerBox.svg"
                display="flex"
                position="absolute"
                left="60%"
                bottom="-30%"
                sx={{ zIndex: "10" }}
              />
              <Image
                src="img/dove.svg"
                display="flex"
                position="absolute"
                bottom="100px"
                left="-200px"
              />
              <Flex>
                <Image src="img/techup.png" w="250" h="250" mt="25px" />
                <Text
                  fontSize="20px"
                  mt="25px"
                  style={{ textIndent: 40 }}
                  mr="10px"
                >
                  The content of this online bootcamp course does not just teach
                  programming. But it covers everything from the basics of
                  fundamentals to the concepts and methods of real software
                  development. With the following contents Programming,
                  Introduction to Programming and Back-End Development.
                </Text>
              </Flex>
            </Box>
          </Box>
        </Carousel>
        <Flex position="absolute" w="fit-content">
          <Image
            src="img/Group 23.svg"
            mt={{ xl: "-10%", "2xl": "-10%" }}
            right={{ "2xl": "80px" }}
            sx={{ zIndex: "10" }}
          />
          <Image
            src="img/Group 23.svg"
            display="flex"
            position="absolute"
            left={{ xl: "-35%", "2xl": "-30%" }}
            mt={{ xl: "-2%", "2xl": "0%" }}
            sx={{ zIndex: "10" }}
          />
        </Flex>
      </Box>
    </Box>
  );
}
export default Education;
