// Main component. 
// Remembers which tab is open
// Shows the page that is selected under the navigation bar.

import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import HelpPage from './pages/HelpPage'
import EducationPage from './pages/EducationPage'
import MeditationPage from './pages/MeditationPage'
import FlexibilityPage from './pages/FlexibilityPage'
import GoalsPage from './pages/GoalsPage'
import TimerPage from './pages/TimerPage'

function App() {
  // Which tab is currently open. The app starts on the home page.
  const [activeTab, setActiveTab] = useState('home')

  // Pick which page to show based on the active tab
  function renderPage() {
    if (activeTab === 'help') {
      return <HelpPage />
    }
    if (activeTab === 'education') {
      return <EducationPage />
    }
    if (activeTab === 'meditation') {
      return <MeditationPage />
    }
    if (activeTab === 'flexibility') {
      return <FlexibilityPage />
    }
    if (activeTab === 'goals') {
      return <GoalsPage />
    }
    if (activeTab === 'timer') {
      return <TimerPage />
    }

    // Default to showing the home page
    return <HomePage onTabChange={setActiveTab} />
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Pain Management</h1>
        <p className="app-subtitle">A space for living with chronic pain</p>
      </header>

      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="page-content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App