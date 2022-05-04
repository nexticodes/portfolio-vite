import React from 'react'

const Contact = ({scrollRef}) => {
  return (
    <div className='container contact' ref={el => scrollRef.current = { ...scrollRef.current, contact: el}}>Like what you see? Reach out and we can talk!</div>
  )
}

export default Contact