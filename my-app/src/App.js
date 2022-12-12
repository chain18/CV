import "./App.css";
import React from "react";
import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bgColor="#8CB1BB">
      <Header />
      {/* <AboutMe /> */}
      <Education />
    </Box>
  );
}

export default App;
