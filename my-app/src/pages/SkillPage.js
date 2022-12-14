import {
  Box,
  Tabs,
  TabPanel,
  TabList,
  Tab,
  TabPanels,
  useColorModeValue,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";
import { React, useState } from "react";
import AboutMe from "./AboutMe";

function Skill() {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50", "yellow.50"],
    ["red.900", "teal.900", "blue.900", "yellow.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  return (
    <Box>
      <Tabs
        mt={{ xl: "-3%", "2xl": "13%" }}
        onChange={(index) => setTabIndex(index)}
        bg={bg}
        w="100vw"
        h="100vw"
        position="absolute"
        sx={{ zIndex: "-1" }}
      >
        <Image
          left="60vw"
          src="img/Group 26.svg"
          display="flex"
          position="absolute"
          sx={{ zIndex: "10" }}
        />
        <TabList pt={{ xl: "20%", "2xl": "15%" }}>
          <Tab>
            <Heading>Front-End</Heading>
          </Tab>
          <Tab>
            <Heading>Back-End</Heading>
          </Tab>
          <Tab>
            <Heading>Other</Heading>
          </Tab>
          <Tab>
            <Heading>Project</Heading>
          </Tab>
        </TabList>
        <TabPanels p="2rem">
          <TabPanel>
            <Flex></Flex>
          </TabPanel>
          <TabPanel></TabPanel>

          <TabPanel>Red, yellow and blue.</TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
export default Skill;
