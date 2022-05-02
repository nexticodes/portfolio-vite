import React from 'react';
import '../assets/styles/Splash.css';

const Splash = ({scrollRef}) => {
  return (
    <div ref={el => scrollRef.current = { ...scrollRef.current, splash: el}} className='splash-container'>
        <div className='splash-box'>
            <img src="https://ca.slack-edge.com/T0351JZQ0-U036NP96LTF-9a8a122e6abe-512"/>
            <h1>Hi, I'm Ernest 👋</h1>
            <h2>Thanks for stopping by!</h2>
        </div>    
    </div>
  )
}

export default Splash