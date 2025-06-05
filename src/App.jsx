import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Intro from "./sections/Intro";
import LoadingReveal from "./components/LoadingReveal";

const App = () => {
  return (
    <LoadingReveal>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Intro />
        {/* <Hero /> */}
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </LoadingReveal>
  );
};

export default App;
