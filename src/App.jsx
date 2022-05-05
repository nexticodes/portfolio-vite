import { useState, useRef, useEffect } from "react";
import {
    Splash,
    Navbar,
    About,
    Projects,
    Skills,
    Contact,
    Footer,
} from "./components";
import "./App.css";

function App() {
    const scrollRef = useRef({});
    const [currSection, setCurrentSection] = useState("splash");

    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            // scroll up or scroll down listener.
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && goingUp) {
              setGoingUp(false);
            }
            
            if (prevScrollY.current > currentScrollY && !goingUp) {
              setGoingUp(true);
            }
            prevScrollY.current = currentScrollY;
            console.log("isGoingUp", goingUp);
            
            // scroll listener for switching navbar state depending on which section the user is reading.
            const refCurr = scrollRef.current;
            const clientHeight = refCurr.about.clientHeight;
            if (
                currentScrollY < refCurr.projects.offsetTop - 50 &&
                currentScrollY + 150 > refCurr.about.offsetTop
            ) {
                setCurrentSection("about");
            } else if (
                currentScrollY < refCurr.skills.offsetTop - 50 &&
                currentScrollY + 100 > refCurr.projects.offsetTop
            ) {
                setCurrentSection("projects");
            } else if (
                currentScrollY < refCurr.contact.offsetTop - 50 &&
                currentScrollY + 100 > refCurr.skills.offsetTop
            ) {
                setCurrentSection("skills");
            } else if (
                currentScrollY + clientHeight >= refCurr.contact.offsetTop
            ) {
                setCurrentSection("contact");
            } else if (currentScrollY < refCurr.about.offsetTop) {
                setCurrentSection("splash");
            }
        };
        console.log(currSection)
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [goingUp]);

    return (
        <div className="App">
            <Splash scrollRef={scrollRef} />
            <Navbar
                currSection={currSection}
                goingUp={goingUp}
                scrollRef={scrollRef}
                setCurrentSection={setCurrentSection}
            />
            <div
                ref={(el) =>
                    (scrollRef.current = { ...scrollRef.current, content: el })
                }
                className="app-container"
            >
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
