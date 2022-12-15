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
  Grid,
} from "@chakra-ui/react";
import { React, useState } from "react";

function Skill() {
  const colors = useColorModeValue([
    "url('/img/skyAbout.svg')",
    "linear-gradient(180deg,  #FFEEC9,#8C8FA2, #FDDB8E)",
    "linear-gradient(180deg,  #FFEEC9,#AEC7EA, #FDDB8E)",
    "blue.50",
    "url('/img/skyAbout.svg')",
  ]);
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  return (
    <Flex>
      <Tabs
        onChange={(index) => setTabIndex(index)}
        bg={bg}
        sx={{ zIndex: "0" }}
        w="100%"
        h={{ xl: "90vw", "2xl": "75vw" }}
      >
        <Image
          left="55vw"
          src="img/Group 26.svg"
          // src="img/skillTitle.svg"
          display="flex"
          position="absolute"
          sx={{ zIndex: "-10" }}
        />
        <Image
          src="img/skillsky.webp"
          sx={{ zIndex: "-2" }}
          position="absolute"
          bottom="-4%"
          w="100vw"
        />

        <TabList ml="20%" pt={{ xl: "20%", "2xl": "15%" }}>
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
            <Flex flexDirection="column" position="absolute" ml={{ xl: "5%" }}>
              <Flex boxSize={{ xl: "400px", "2xl": "50%" }}>
                <Image
                  src="img/chakra.svg"
                  mb={{ xl: "-350px", "2xl": "250px" }}
                />
                <Image src="img/js.svg" mt={{ xl: "-60px", "2xl": "150px" }} />
                <Image
                  src="img/react.svg"
                  mb={{ xl: "-350px", "2xl": "150px" }}
                  ml={{ "2xl": "60px" }}
                />
              </Flex>
              <Flex boxSize={{ xl: "400px", "2xl": "50%" }}>
                <Image
                  src="img/tailwind.svg"
                  mb={{ xl: "-220px", "2xl": "200px" }}
                />
                <Image
                  src="img/css.svg"
                  mb={{ xl: "100px", "2xl": "-150px" }}
                />
                <Image
                  src="img/html.svg"
                  mb={{ xl: "-220px", "2xl": "90px" }}
                />
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex flexDirection="column" position="absolute" ml={{ xl: "5%" }}>
              <Flex boxSize={{ xl: "400px", "2xl": "50%" }}>
                <Image
                  src="img/chakra.svg"
                  mb={{ xl: "-350px", "2xl": "250px" }}
                />
                <Image src="img/js.svg" mt={{ xl: "-60px", "2xl": "150px" }} />
                <Image
                  src="img/react.svg"
                  mb={{ xl: "-350px", "2xl": "150px" }}
                  ml={{ "2xl": "60px" }}
                />
              </Flex>
              <Flex boxSize={{ xl: "400px", "2xl": "50%" }}>
                <Image
                  src="img/tailwind.svg"
                  mb={{ xl: "-220px", "2xl": "200px" }}
                />
                <Image
                  src="img/css.svg"
                  mb={{ xl: "100px", "2xl": "-150px" }}
                />
                <Image
                  src="img/html.svg"
                  mb={{ xl: "-220px", "2xl": "90px" }}
                />
              </Flex>
            </Flex>
          </TabPanel>

          <TabPanel>
            <Flex flexDirection="column" position="absolute" ml={{ xl: "5%" }}>
              <Flex boxSize={{ xl: "400px", "2xl": "50%" }}>
                <Image
                  src="img/chakra.svg"
                  mb={{ xl: "-350px", "2xl": "250px" }}
                />
                <Image src="img/js.svg" mt={{ xl: "-60px", "2xl": "150px" }} />
                <Image
                  src="img/react.svg"
                  mb={{ xl: "-350px", "2xl": "150px" }}
                  ml={{ "2xl": "60px" }}
                />
              </Flex>
              <Flex boxSize={{ xl: "400px", "2xl": "50%" }}>
                <Image
                  src="img/tailwind.svg"
                  mb={{ xl: "-220px", "2xl": "200px" }}
                />
                <Image
                  src="img/css.svg"
                  mb={{ xl: "100px", "2xl": "-150px" }}
                />
                <Image
                  src="img/html.svg"
                  mb={{ xl: "-220px", "2xl": "90px" }}
                />
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
export default Skill;
