import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Card, Carousel } from "antd";
import "@fontsource/great-vibes/400.css";
import "@fontsource/fragment-mono/400.css";
import theme from "../configs/theme";

const contentStyle = {
  position: "relative",
  height: "300px",
  width: "70vh",
  "margin-top": "20vh",
  "margin-bottom": "30px",
  "margin-left": "35vh",
  color: "#ce93d8",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
  border: "2px solid gold",
  "border-radius": "20px 20px ",
  "box-shadow":
    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

function Education() {
  return (
    <div theme={theme}>
      <Flex></Flex>
      <div>
        <Carousel autoplay>
          <div>
            <div style={contentStyle}>
              <Image
                src="img/flowerBox.svg"
                display="flex"
                position="absolute"
                left="55%"
                bottom="-30%"
                sx={{ zIndex: "10" }}
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <Image
                src="img/flowerBox.svg"
                display="flex"
                position="absolute"
                left="55%"
                bottom="-30%"
                sx={{ zIndex: "10" }}
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <Image
                src="img/flowerBox.svg"
                display="flex"
                position="absolute"
                left="55%"
                bottom="-30%"
                sx={{ zIndex: "10" }}
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <Image
                src="img/flowerBox.svg"
                display="flex"
                position="absolute"
                left="55%"
                bottom="-30%"
                sx={{ zIndex: "10" }}
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default Education;
