// A countdown timer with preset times.

import { useState, useEffect } from 'react'
import './TimerPage.css'

const presetMinutes = [1, 3, 5, 10, 15, 20]

// Turn a number of seconds into "mm:ss" text, like 03:05
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const minutesText = String(minutes).padStart(2, '0')
  const secondsText = String(seconds).padStart(2, '0')

  return minutesText + ':' + secondsText
}

function TimerPage() {
  const [totalSeconds, setTotalSeconds] = useState(5 * 60)
  const [secondsLeft, setSecondsLeft] = useState(5 * 60)
  const [isRunning, setIsRunning] = useState(false)

  // While the timer is running take one second off every second
  useEffect(() => {
    if (!isRunning) {
      return
    }

    const timeoutId = setTimeout(() => {
      const newSecondsLeft = secondsLeft - 1
      setSecondsLeft(newSecondsLeft)

      if (newSecondsLeft === 0) {
        setIsRunning(false)
      }
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [isRunning, secondsLeft])

  function handlePresetClick(minutes) {
    const seconds = minutes * 60
    setTotalSeconds(seconds)
    setSecondsLeft(seconds)
    setIsRunning(false)
  }

  function handleStartPause() {
    // If the timer already finished, start it again from the beginning
    if (secondsLeft === 0) {
      setSecondsLeft(totalSeconds)
    }
    setIsRunning(!isRunning)
  }

  function handleReset() {
    setIsRunning(false)
    setSecondsLeft(totalSeconds)
  }

  const isFinished = secondsLeft === 0

  let startButtonText = 'Start'
  if (isRunning) {
    startButtonText = 'Pause'
  }

  return (
    <div>
      <div className="page-header">
        <h2>Timer</h2>
        <p></p>
      </div>

      <section className="card timer-card">
        {/* Preset time buttons */}
        <div className="preset-buttons">
          {presetMinutes.map((minutes) => {
            let className = 'preset-button'
            if (minutes * 60 === totalSeconds) {
              className = 'preset-button active'
            }

            return (
              <button
                key={minutes}
                className={className}
                onClick={() => handlePresetClick(minutes)}
              >
                {minutes} min
              </button>
            )
          })}
        </div>

        {/* Time left */}
        <div className="timer-text">{formatTime(secondsLeft)}</div>

        {isFinished && (
          <p className="finished-message">Time is up. Nicely done. 🌿</p>
        )}

        {/* Controls */}
        <div className="timer-controls">
          <button className="button" onClick={handleStartPause}>
            {startButtonText}
          </button>
          <button className="button button-soft" onClick={handleReset}>
            Reset
          </button>
        </div>
      </section>
    </div>
  )
}

export default TimerPage