import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Card,
  CardBody,
  Stack,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/great-vibes/400.css";
import "@fontsource/fragment-mono/400.css";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function WorkExperience() {
  return (
    <Box
      h={{ xl: "100vw", "2xl": "75vw" }}
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    >
      <Image src="img/bg2.svg" />
      <Image src="img/Group 35.svg" boxSize="600px" mt="-60%" />
      <Flex justifyContent="space-around" alignItems="center" mt="-15%">
        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Card maxW="sm" bg="white">
            <CardBody>
              <Image
                src="img/R.jfif"
                alt="Suvarnabhumi Airport"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text color="blue.600" fontSize="2xl">
                  2019
                </Text>
                <Divider />
                <Text size="md">Airport&hotel Reception</Text>
                <Text>
                  - Greeting and manage incoming customer to the reception area.
                  <br></br>- Provide a service and coordinate with hotel to take
                  them to the hotel smoothly.<br></br>- Collaborate and
                  coordinate with hotels and airlines to prepare proper service
                  for customers.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Card maxW="sm" bg="white">
            <CardBody>
              <Image
                src="img/R 2.jfif"
                alt="Suvarnabhumi Airport"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text color="blue.600" fontSize="2xl">
                  2018-2019
                </Text>
                <Divider />
                <Text size="md">personal chef assistant (Commis 2)</Text>
                <Text>
                  - Prepared and serviced all ingredient for buffet menus
                  according to the hotel recipes and standards
                  <br></br>- Trained new employees and trainees.
                  <br></br>- Rechecked the stock before processing a new
                  purchase.
                  <br></br>- Coordinated and collaborated with related
                  departments.
                  <br></br>- Provided a service to the customer and maintain
                  good relationship.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </motion.div>
      </Flex>
      <Footer />
    </Box>
  );
}

export default WorkExperience;
