import Hero from "./hero/hero";
import About from "./about/about";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Footer from "./universal/footer";
import Navbar from "./universal/navbar";
import Loader from "./loader/loader";

export default function Home() {
  return (
    <>
      <Loader />
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
