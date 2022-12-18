import React from "react";
import { Box, Center, Flex, Image, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <Flex>
      <Box w="100vw" mt="3%">
        <Image src="img/Group 36.svg" />

        <Flex justifyContent="center" w="100%" my="2%">
          <Tooltip label="091-2687966" fontSize="md">
            <Box mr="5%" boxSize="50px">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="#">
                  <Image src="img/tel.svg" alt="Tel-0912687966" />
                </a>
              </motion.div>
            </Box>
          </Tooltip>
          <Tooltip label="thanakit.thanasan@gmail.com" fontSize="md">
            <Box mr="5%" boxSize="50px">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="thanakit.thanasan@gmail.com">
                  <Image src="img/mail1.svg" alt="E-mail" />
                </a>
              </motion.div>
            </Box>
          </Tooltip>
          <Tooltip label="thanakitchain" fontSize="md">
            <Box mr="5%" boxSize="50px">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="https://www.instagram.com/thanakitchain/?hl=id">
                  <Image src="img/IG.svg" alt="IG" />
                </a>
              </motion.div>
            </Box>
          </Tooltip>
          <Tooltip
            label="https://www.linkedin.com/in/thanakitthanasan/"
            fontSize="md"
          >
            <Box mr="5%" boxSize="50px">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="https://www.linkedin.com/in/thanakitthanasan/">
                  <Image src="img/linke.svg" alt="Linkedin" />
                </a>
              </motion.div>
            </Box>
          </Tooltip>
          <Tooltip label="https://github.com/chain18" fontSize="md">
            <Box boxSize="50px">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="https://github.com/chain18">
                  <Image src="img/github.svg" alt="Github" />
                </a>
              </motion.div>
            </Box>
          </Tooltip>
        </Flex>
      </Box>
    </Flex>
  );
}
export default Footer;
