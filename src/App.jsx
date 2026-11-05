import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Banner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
