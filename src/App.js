import React, { useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/Contact';



function App() {
  const section = ['About Me', 'Projects', 'Contact Me'];
  const [sectionSelected, setSectionSelected] = useState(section[0]);
  return (
    <div>
      <Nav
        section={section}
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      ></Nav>
      <main>
      {sectionSelected === section[0] && (
          <About></About>
        )}
        {sectionSelected === section[1] && (
          <Projects></Projects>
        )}
        {sectionSelected === section[2] && (
          <ContactForm></ContactForm>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
