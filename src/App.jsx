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
            if (
                window.scrollY <= refCurr.projects.offsetTop &&
                window.scrollY > refCurr.about.offsetTop
            ) {
                setCurrentSection("about");
            } else if (
                window.scrollY <= refCurr.skills.offsetTop &&
                window.scrollY > refCurr.projects.offsetTop - 200
            ) {
                setCurrentSection("projects");
            } else if (
                window.scrollY <= refCurr.contact.offsetTop - 20 &&
                window.scrollY > refCurr.skills.offsetTop
            ) {
                console.log("skills");
                setCurrentSection("skills");
            } else if (
                window.scrollY <= refCurr.skills.offsetTop - 20 &&
                window.scrollY > refCurr.contact.offsetTop
            ) {
                setCurrentSection("contact");
            } else if (window.scrollY < refCurr.about.offsetTop) {
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
