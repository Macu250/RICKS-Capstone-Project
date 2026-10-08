// The row of tab buttons at the top of the app
// It gets the current tab and a function to change tabs from App.jsx

import tabs from '../data/tabs'
import './NavBar.css'

function NavBar({ activeTab, onTabChange }) {
  return (
    <nav className="navbar">
      {tabs.map((tab) => {
        // Give the selected tab an extra class so it can be highlighted
        let className = 'nav-button'
        if (tab.id === activeTab) {
          className = 'nav-button active'
        }

        return (
          <button
            key={tab.id}
            className={className}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default NavBar