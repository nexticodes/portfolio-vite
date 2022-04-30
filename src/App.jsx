import { useState } from 'react'
import { Navbar, About, Projects, Skills, Contact, Footer } from './components';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
