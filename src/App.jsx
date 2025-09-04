import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Testimonial from './sections/Testimonial'
import Footer from './sections/Footer'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      {/* <div id="testimonials">
        <Testimonial />
      </div> */}
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
