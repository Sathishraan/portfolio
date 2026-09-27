// src/App.jsx
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Expertise from './components/Expertise.jsx';
import Experience from './components/Experience.jsx';
// import Skills from './components/Skills.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Philosophy from './components/Philosophy.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import SplashScreen from './components/SplashScreen.jsx';

export default function App() {
  return (
    <>
      <SplashScreen />
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <CustomCursor />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        {/* <Skills /> */}
        <TechStack />
        <Projects />
        <Services />
        <Philosophy />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}