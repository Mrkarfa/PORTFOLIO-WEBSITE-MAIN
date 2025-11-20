import Hero from "./hero/hero";
import About from "./about/about";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Footer from "./universal/footer";
import Navbar from "./universal/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
