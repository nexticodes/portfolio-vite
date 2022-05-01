import { useState, useRef } from "react";
import { Navbar, About, Projects, Skills, Contact, Footer } from "./components";
import "./App.css";

function App() {
    const scrollRef = useRef({});

    return (
        <div className="App">
            <Navbar scrollRef={scrollRef}/>
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
