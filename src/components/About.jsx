import React from 'react'
import '../assets/styles/About.css'

const About = ({scrollRef}) => {
  return (
    <div ref={el => scrollRef.current = { ...scrollRef.current, about: el}} className='container about'>
      <div className='content'>
        <div className='box'>
          <div className='container-title'>
            <img/>
            <h1>About Me</h1>
          </div>
          <div className='container-content'>
              <p>I am a Full Stack Software Engineer specializing in using front end web technologies to translate an idea to a workable, efficient code.</p>
              <p>I have an Associate's Degree in Engineering Sciences, years of experience working in customer service, construction & carpentry, and am currently working as an Instructional Associate / Teaching Assistant hybrid.</p>
              <p>I am innately interested in engineering, physics, technology, and gaming. When I am not building and tutoring, I make sure I'm occupied by learning and exploring blockchain technologies and Web 3.</p>
              <p>Occassionally gaming 🕹 </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About