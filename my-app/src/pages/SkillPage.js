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
  Text,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { Button, Modal } from "antd";
import { React, useState } from "react";

function Skill() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const colors = useColorModeValue([
    "linear-gradient(180deg,  #FFEEC9,#AEC7EA, #FDDB8E)",
    "linear-gradient(180deg,  #FFEEC9,#AEC7EA, white)",
    "linear-gradient(180deg,  #FFEEC9,#8C8FA2, #FAB837)",
    "linear-gradient(180deg,  #FFEEC9, #804e9c, #6f99a8,#FDDB8E)",
    // "url('/img/night.png')",
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
          left="65vw"
          mt={{ xl: "-23%", "2xl": "-18%" }}
          src="img/Group 32.svg"
          boxSize={{ xl: "30%", "2xl": "30%" }}
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
              <Image
                src="img/FE.svg"
                w="80vw"
                h={{ "2xl": "50vw", xl: "70vw" }}
                ml="5%"
              />
              {/* <Flex boxSize={{ xl: "400px", "2xl": "50%" }}>
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
              </Flex> */}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex flexDirection="column" position="absolute" ml={{ xl: "5%" }}>
              <Image
                src="img/BE1.svg"
                w="80vw"
                h={{ "2xl": "60vw", xl: "60vw" }}
                ml="7%"
              />
            </Flex>
          </TabPanel>

          <TabPanel>
            <Flex flexDirection="column" position="absolute" ml={{ xl: "5%" }}>
              <Image
                src="img/Group 34.svg"
                w="80vw"
                h={{ "2xl": "60vw", xl: "60vw" }}
                ml="2%"
              />
            </Flex>
          </TabPanel>

          <TabPanel ml="10%" mt="5%">
            <Flex>
              <Flex w="300px" h="200px" bg="white" borderRadius="5px" m="2%">
                <Image src="img/CourseFlow.svg" p="10px" />
              </Flex>
              <Box
                w="650px"
                h="300px"
                bg="white"
                borderRadius="5px"
                m="2%"
                p="15px"
              >
                <Text mt="10px" style={{ textIndent: 30 }} mb="20px">
                  CourseFlow is an online study platform that allows users to
                  take a variety of courses at their own pace. Users of our
                  website can select the courses that interest them, learn to
                  use our videos, and do exercises online.
                  <br></br>
                  <br></br>- Created a front-end user experience utilizing the
                  Material UI framework with JavaScript, React and RESTful API
                  <br></br>
                  <br></br>- Design and integrated SQL database using Postgress
                </Text>
                <Button type="primary" onClick={() => setModal1Open(true)}>
                  see detail user side
                </Button>
                <Button
                  type="primary"
                  onClick={() => setModal2Open(true)}
                  m="2px"
                >
                  see detail admin side
                </Button>
              </Box>
            </Flex>
            <Modal
              title="Example: Users CourseFlow Project "
              open={modal1Open}
              onOk={() => setModal1Open(false)}
              onCancel={() => setModal1Open(false)}
            >
              <Image src="img/home.svg" />
              <Image src="img/login.svg" />
              <Image src="img/register.svg" />
              <Image src="img/profile.svg" />
              <Image src="img/course learning.svg" />
              <Image src="img/my course.svg" />
              <Image src="img/my homework.svg" />
            </Modal>
            <Modal
              title="Example: Admin CourseFlow Project "
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
            >
              <Image src="img/(admin) login.svg" />
              <Image src="img/(admin) assignment list.svg" />
              <Image src="img/(admin) add assignment.svg" />
              <Image src="img/(admin) edit course.svg" />
            </Modal>
            <Flex>
              <Flex w="300px" h="200px" bg="white" borderRadius="5px" m="2%">
                <Heading display="flex" alignItems="center" m="55px">
                  Digital agency{" "}
                </Heading>
              </Flex>
              <Box
                w="650px"
                h="100px"
                bg="white"
                borderRadius="5px"
                m="2%"
                p="15px"
              >
                <Text mt="10px" style={{ textIndent: 30 }} mb="20px">
                  Created a responsive web application homepage on front-end by
                  using Tailwind CSS framework and HTML
                </Text>
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
export default Skill;
