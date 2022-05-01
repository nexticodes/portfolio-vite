import { useState, useRef, useEffect } from "react";
import { Navbar, About, Projects, Skills, Contact, Footer } from "./components";
import "./App.css";

function App() {
    const scrollRef = useRef({});
    const [currSection, setCurrentSection] = useState('about');

    const handleScroll = (e) => {
      const refCurr = scrollRef.current;
      if (window.scrollY <= refCurr.about.offsetTop + 20) {
        setCurrentSection('about');
      } else if (window.scrollY <= refCurr.projects.offsetTop + 20 && window.scrollY > refCurr.projects.offsetTop - 20) {
        setCurrentSection('projects');
      } else if (window.scrollY <= refCurr.skills.offsetTop + 20 && window.scrollY > refCurr.skills.offsetTop - 20) {
        setCurrentSection('skills');
      } else if (window.scrollY <= refCurr.contact.offsetTop + 20 && window.scrollY > refCurr.contact.offsetTop - 20) {
        setCurrentSection('contact');
      }
    }
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, {passive: true});
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [scrollRef.current]);

    return (
        <div className="App">
            <Navbar currSection={currSection} scrollRef={scrollRef}/>
            <div className="app-container">
                <About scrollRef={scrollRef} />
                <Projects scrollRef={scrollRef} />
                <Skills scrollRef={scrollRef} />
                <Contact scrollRef={scrollRef} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
