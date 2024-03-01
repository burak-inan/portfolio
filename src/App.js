import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [width, setWidth] = useState(null);

  const getWidth= (width)=>{
    setWidth(width)
  }

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header getWidth={getWidth} />
          <LandingSection minWidth={width} />
          <ProjectsSection minWidth={width} />
          <ContactMeSection minWidth={width} />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
