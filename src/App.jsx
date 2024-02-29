import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx";
import About from './components/About/About.jsx';
import Service from "./components/services/Service.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Banner from "./components/banner/Banner.jsx";
import Contact from "./components/contact/Contact.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
 
  return (
    <>
    <div className="hero-image">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Banner />
      <Contact />
      <Testimonial />
      <Footer /> 
    </div>
      
    </>
  )
}

export default App
