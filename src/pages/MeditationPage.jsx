// The circle does not animate yet. The button only switches between "Begin" and "Stop".

import { useState } from 'react'
import './MeditationPage.css'

function MeditationPage() {
  const [isRunning, setIsRunning] = useState(false)

  function handleButtonClick() {
    setIsRunning(!isRunning)
  }

  let buttonText = 'Begin'
  if (isRunning) {
    buttonText = 'Stop'
  }

  return (
    <div>
      <div className="page-header">
        <h2>Breathe</h2>
        <p></p>
      </div>

      <section className="card breathing-area">
        {/*
        <div className="circle-holder">
          <div className="breath-ring"></div>
          <div className="breath-circle">
            <span>Ready</span>
          </div>
        </div>
        */}

        <button className="button" onClick={handleButtonClick}>
          {buttonText}
        </button>
      </section>
    </div>
  )
}

export default MeditationPage