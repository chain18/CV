import React from "react";
import { Box, Flex, Image, Center } from "@chakra-ui/react";
function Navbar() {
  return (
    <Flex
      mt={{ "2xl": "-5%", xl: "-13%", lg: "-20%" }}
      position="relative"
      justifyContent="center"
      sx={{
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        zIndex: "5000000000000000",
      }}
      mb={{ "2xl": "0px", xl: "5%" }}
      mr={{xl:"5%"}}
    >
      <Flex
        w={{ "2xl": "100%", xl: "50vw", lg: "40vw" }}
        pt={{ xl: "-50%" }}
        flexDirection="row"
        justifyContent="center"
      >
        <a href="#">
          <Image
            src="img/Group 14.svg"
            alt="About Me"
            mx={{ "2xl": "50px", xl: "60px", lg: "50px" }}
            pr={{ "2xl": "0px", xl: "60px", lg: "80px" }}
          />
        </a>
        <a href="#">
          <Image
            src="img/Group 15.svg"
            alt="Education"
            mx={{ "2xl": "50px", xl: "60px", lg: "50px" }}
            pr={{ "2xl": "0px", xl: "60px", lg: "80px" }}
          />
        </a>
        <a href="#">
          <Image
            src="img/Group 16.svg"
            alt="Skill"
            mx={{ "2xl": "50px", xl: "50px", lg: "50px" }}
            pr={{ "2xl": "0px", xl: "60px", lg: "80px" }}
          />
        </a>
        <a href="#">
          <Image
            src="img/Group 17.svg"
            alt="Work Experience"
            mx={{ "2xl": "50px", xl: "60px", lg: "50px" }}
            pr={{ "2xl": "0px", xl: "60px", lg: "80px" }}
          />
        </a>
        <a href="#">
          <Image
            src="img/Group 18.svg"
            alt="Contact"
            mt={{ "2xl": "5%", xl: "10px", lg: "5px" }}
            mx={{ "2xl": "50px", xl: "60px", lg: "50px" }}
            pr={{ "2xl": "0px", xl: "60px", lg: "80px" }}
          />
        </a>
      </Flex>
    </Flex>
  );
}

export default Navbar;