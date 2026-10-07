// The welcome screen. Shows a greeting and a card for each feature.
// Clicking a card opens that tab.

import tabs from '../data/tabs'
import './HomePage.css'

// Pick a greeting based on the time of day
function getGreeting() {
  const hour = new Date().getHours()

  if (hour < 12) {
    return 'Good morning'
  }
  if (hour < 18) {
    return 'Good afternoon'
  }
  return 'Good evening'
}

function HomePage({ onTabChange }) {
  // Don't need a card for "Home" on the home page itself
  const featureTabs = tabs.filter((tab) => tab.id !== 'home')

  return (
    <div>
      <section className="welcome card">
        <h2>{getGreeting()}</h2>
        <p>
          Choose where you would like to begin.
        </p>
      </section>

      <div className="card-grid">
        {featureTabs.map((tab) => (
          <button
            key={tab.id}
            className="feature-card card"
            onClick={() => onTabChange(tab.id)}
          >
            <span className="feature-icon">{tab.icon}</span>
            <h3>{tab.label}</h3>
            <p>{tab.description}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default HomePage