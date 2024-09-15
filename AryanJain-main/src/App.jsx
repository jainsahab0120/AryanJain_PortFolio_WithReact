import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
// import Certificate from './sections./Certificate/Certificate';
import Certificate from './sections/Certificate/Certificate';


function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Certificate /> 
      <Contact />
      <Footer />
    </>
  );
}

export default App;
