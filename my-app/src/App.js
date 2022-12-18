import "./App.css";
import React from "react";
import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Skill from "./pages/SkillPage";
import WorkExperience from "./pages/WorkEx";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Header />
      <AboutMe />
      <Education />
      <Skill />
      <WorkExperience />
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
