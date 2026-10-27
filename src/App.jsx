import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Help from './pages/Help'
import Education from './pages/Education'
import Meditation from './pages/Meditation'
import Flexibility from './pages/Flexibility'
import Goals from './pages/Goals'
import Timer from './pages/Timer'

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav>
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
          <Link to="/education">Education</Link>
          <Link to="/meditation">Meditation</Link>
          <Link to="/flexibility">Flexibility</Link>
          <Link to="/goals">Goals</Link>
          <Link to="/timer">Timer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/education" element={<Education />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/flexibility" element={<Flexibility />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App