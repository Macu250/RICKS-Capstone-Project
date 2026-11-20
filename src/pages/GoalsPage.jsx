import { useState } from 'react'
import './Goals.css'

const STORAGE_KEY = 'chronic-pain-goals-v2'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function GoalsPage() {
  const [goals, setGoals] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  })

  const [newGoal, setNewGoal] = useState('')

  // Save goals and their marked cells locally
  function saveGoals(updatedGoals) {
    setGoals(updatedGoals)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGoals))
  }

  // Add a new goal
  function addGoal(event) {
    event.preventDefault()

    const name = newGoal.trim()
    if (!name) return

    const goal = {
      id: crypto.randomUUID(),
      name: name,
      days: {}
    }

    saveGoals([...goals, goal])
    setNewGoal('')
  }

  // Cycle through gray, green checkmark, and red X
  function cycleCell(goalId, day) {
    const updatedGoals = goals.map((goal) => {
      if (goal.id !== goalId) return goal

      const updatedDays = { ...goal.days }
      const current = updatedDays[day]

      if (!current) {
        updatedDays[day] = 'done'
      } else if (current === 'done') {
        updatedDays[day] = 'missed'
      } else {
        delete updatedDays[day]
      }

      return { ...goal, days: updatedDays }
    })

    saveGoals(updatedGoals)
  }

  // Delete an individual goal
  function removeGoal(goalId) {
    if (window.confirm('Delete this goal?')) {
      saveGoals(goals.filter((goal) => goal.id !== goalId))
    }
  }

  // Clear all checkmarks and X marks, but keep the goals
  function clearAll() {
    if (window.confirm('Clear all marked cells? Your goals will remain.')) {
      const updatedGoals = goals.map((goal) => ({
        ...goal,
        days: {}
      }))

      saveGoals(updatedGoals)
    }
  }

  return (
    <main className="goals-page">
      <div className="goals-heading">
        <h1>My Goals</h1>
        <p>Track your progress one day at a time.</p>
      </div>

      <form className="goals-add" onSubmit={addGoal}>
        <label htmlFor="new-goal">Add a new goal</label>

        <div className="goals-add-row">
          <input
            id="new-goal"
            value={newGoal}
            onChange={(event) => setNewGoal(event.target.value)}
            placeholder="Enter a goal"
            maxLength={100}
          />

          <button type="submit" disabled={!newGoal.trim()}>
            Add Goal
          </button>
        </div>
      </form>

      <section className="goals-tracker">
        <div className="goals-tracker-top">
          <h2>Weekly Goals</h2>

          <button
            type="button"
            className="goals-clear"
            onClick={clearAll}
            disabled={goals.length === 0}
          >
            Clear All
          </button>
        </div>

        {goals.length === 0 ? (
          <p className="goals-empty">
            No goals yet. Add your first goal above.
          </p>
        ) : (
          <div className="goals-table-scroll">
            <table className="goals-table">
              <thead>
                <tr>
                  <th scope="col">Goal</th>

                  {days.map((day) => (
                    <th scope="col" key={day}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {goals.map((goal) => (
                  <tr key={goal.id}>
                    <th scope="row">
                      <div className="goals-name">
                        <span>{goal.name}</span>

                        <button
                          type="button"
                          className="goals-delete"
                          onClick={() => removeGoal(goal.id)}
                          title="Delete goal"
                          aria-label={`Delete ${goal.name}`}
                        >
                          ×
                        </button>
                      </div>
                    </th>

                    {days.map((day) => {
                      const status = goal.days[day] || 'empty'

                      return (
                        <td key={day}>
                          <button
                            type="button"
                            className={`goals-cell goals-cell--${status}`}
                            onClick={() => cycleCell(goal.id, day)}
                            aria-label={`${goal.name}, ${day}: ${status}`}
                          >
                            {status === 'done'
                              ? '✓'
                              : status === 'missed'
                                ? '×'
                                : ''}
                          </button>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <p className="goals-hint">
        Click once for ✓, twice for ×, and three times to clear.
      </p>

      <p className="goals-privacy">
        Your goals and progress are saved locally on this device.
      </p>
    </main>
  )
}

export default GoalsPage