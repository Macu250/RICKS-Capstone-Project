
 // Main component.
 // Remembers which tab is open
 // Shows the page that is selected under the navigation bar.

import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import InfoMenu from './components/InfoMenu'

import HomePage from './pages/HomePage'
import HelpPage from './pages/HelpPage'
import EducationPage from './pages/EducationPage'
import MeditationPage from './pages/MeditationPage'
import FlexibilityPage from './pages/FlexibilityPage'
import GoalsPage from './pages/GoalsPage'
import TimerPage from './pages/TimerPage'

import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import FeedbackPage from './pages/FeedbackPage'

function App() {
  // Which tab is currently open. Starts on the home page.
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
    if (activeTab === 'about') {
      return <AboutPage />
    }
    if (activeTab === 'privacy') {
      return <PrivacyPage />
    }
    if (activeTab === 'feedback') {
      return <FeedbackPage />
    }

    // Default to showing the home page
    return <HomePage onTabChange={setActiveTab} />
  }

  return (
    <div className="app">
      <InfoMenu onTabChange={setActiveTab} />

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
