import React from 'react'

const ProgressBar = () => {

  const progressMain = {
    height: '30px',
    backgroundColor: 'gray',
    width: '100%',
    transform: 'rotate(270deg)',
    position: 'fixed',
    left: 0,
  }

  return (
    <div style={progressMain}>
      <div className='progress-sub'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default ProgressBar