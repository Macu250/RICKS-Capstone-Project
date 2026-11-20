
import { useState } from 'react'
import './InfoMenu.css'

function InfoMenu({ onTabChange }) {
  const [open, setOpen] = useState(false)

  function changePage(page) {
    onTabChange(page)
    setOpen(false)
  }

  return (
    <div className="info-menu">
      <button
        type="button"
        className="info-menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Open information menu"
        aria-expanded={open}
      >
        ☰
      </button>

      {open && (
        <div className="info-menu-dropdown">
          <button
            type="button"
            onClick={() => changePage('about')}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => changePage('privacy')}
          >
            Privacy
          </button>

          <button
            type="button"
            onClick={() => changePage('feedback')}
          >
            Feedback
          </button>
        </div>
      )}
    </div>
  )
}

export default InfoMenu
