import './App.css'
import Navbar from './components/navbar'
import About from './components/about'
import Education from './components/education'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App