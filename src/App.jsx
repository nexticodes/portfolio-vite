import { useState } from 'react'
import { Navbar, About, Projects, Skills, Contact } from './components';
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
    </div>
  )
}

export default App
