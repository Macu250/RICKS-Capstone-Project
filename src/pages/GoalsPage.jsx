// Lets the user add small goals, check them off, and delete them.
// Goals are saved in the browser's localStorage so they stay after a refresh.

import { useState, useEffect } from 'react'
import './GoalsPage.css'

const STORAGE_KEY = 'painApp.goals'

// Load saved goals from localStorage (or start with an empty list)
function loadGoals() {
  const savedText = localStorage.getItem(STORAGE_KEY)

  if (savedText === null) {
    return []
  }

  return JSON.parse(savedText)
}

function GoalsPage() {
  const [goals, setGoals] = useState(loadGoals)
  const [newGoalText, setNewGoalText] = useState('')

  // Save the goals every time the list changes
  useEffect(() => {
    const goalsText = JSON.stringify(goals)
    localStorage.setItem(STORAGE_KEY, goalsText)
  }, [goals])

  function handleAddGoal(event) {
    // Stop the form from refreshing the page
    event.preventDefault()

    const trimmedText = newGoalText.trim()
    if (trimmedText === '') {
      return
    }

    const newGoal = {
      id: Date.now(),
      text: trimmedText,
      done: false,
    }

    setGoals([...goals, newGoal])
    setNewGoalText('')
  }

  function handleToggleGoal(goalId) {
    const updatedGoals = goals.map((goal) => {
      if (goal.id === goalId) {
        return { ...goal, done: !goal.done }
      }
      return goal
    })

    setGoals(updatedGoals)
  }

  function handleDeleteGoal(goalId) {
    const remainingGoals = goals.filter((goal) => goal.id !== goalId)
    setGoals(remainingGoals)
  }

  // Work out progress for the progress bar
  const completedCount = goals.filter((goal) => goal.done).length
  const totalCount = goals.length

  let percentDone = 0
  if (totalCount > 0) {
    percentDone = Math.round((completedCount / totalCount) * 100)
  }

  return (
    <div>
      <div className="page-header">
        <h2>Your Goals</h2>
        <p>Try goals like "walk for 5 minutes" or "stretch after lunch".</p>
      </div>

      <section className="card goals-card">
        {/* Progress bar */}
        <div className="progress-info">
          <span>
            {completedCount} of {totalCount} done
          </span>
          <span>{percentDone}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: percentDone + '%' }}></div>
        </div>

        {/* Add goal form */}
        <form className="goal-form" onSubmit={handleAddGoal}>
          <input
            type="text"
            placeholder="Add a new goal..."
            value={newGoalText}
            onChange={(event) => setNewGoalText(event.target.value)}
          />
          <button type="submit" className="button">
            Add
          </button>
        </form>

        {/* Goal list */}
        {totalCount === 0 && (
          <p className="empty-message">No goals yet. Add your first one above.</p>
        )}

        <ul className="goal-list">
          {goals.map((goal) => {
            let itemClass = 'goal-item'
            if (goal.done) {
              itemClass = 'goal-item done'
            }

            return (
              <li key={goal.id} className={itemClass}>
                <label>
                  <input
                    type="checkbox"
                    checked={goal.done}
                    onChange={() => handleToggleGoal(goal.id)}
                  />
                  <span>{goal.text}</span>
                </label>

                <button
                  className="delete-button"
                  onClick={() => handleDeleteGoal(goal.id)}
                  aria-label="Delete goal"
                >
                  ✕
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default GoalsPage