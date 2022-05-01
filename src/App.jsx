import { useState, useRef, useEffect } from "react";
import { Splash, Navbar, About, Projects, Skills, Contact, Footer } from "./components";
import "./App.css";

function App() {
    const scrollRef = useRef({});
    const [currSection, setCurrentSection] = useState('splash');

    const handleScroll = (e) => {
      const refCurr = scrollRef.current;
      if (window.scrollY < refCurr.projects.offsetTop && window.scrollY >= refCurr.content.offsetTop - 80 ) {
        setCurrentSection('about');
      } else if (window.scrollY <= refCurr.skills.offsetTop - 20 && window.scrollY > refCurr.projects.offsetTop) {
        setCurrentSection('projects');
      } else if (window.scrollY <= refCurr.contact.offsetTop - 20 && window.scrollY > refCurr.skills.offsetTop) {
        console.log('skills')
        setCurrentSection('skills');
      } else if (window.scrollY <= refCurr.skills.offsetTop - 20 && window.scrollY > refCurr.contact.offsetTop) {
        setCurrentSection('contact');
      } else if (window.scrollY <= refCurr.about.offsetTop - 20) {
        setCurrentSection('splash')
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
            <Splash scrollRef={scrollRef}/>
                <Navbar currSection={currSection} scrollRef={scrollRef} setCurrentSection={setCurrentSection} />
            <div ref={(el) => scrollRef.current = {...scrollRef.current, content: el}} className="app-container">
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
