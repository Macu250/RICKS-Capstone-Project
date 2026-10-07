import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home-page">
      <section className="home-header">
        <h1>RICKS</h1>
        <p>Chronic Pain Management</p>
      </section>

      <section className="home-menu">
        <Link to="/help" className="home-card">
          <h2>Help</h2>
          <p>Support and resources for a pain flare-up.</p>
        </Link>

        <Link to="/education" className="home-card">
          <h2>Education</h2>
          <p>Learn more about chronic pain and central sensitization.</p>
        </Link>

        <Link to="/meditation" className="home-card">
          <h2>Meditation</h2>
          <p>Guided meditation and relaxation resources.</p>
        </Link>

        <Link to="/flexibility" className="home-card">
          <h2>Flexibility</h2>
          <p>Stretching and flexibility resources.</p>
        </Link>

        <Link to="/goals" className="home-card">
          <h2>Goals</h2>
          <p>Create goals and track your progress.</p>
        </Link>

        <Link to="/timer" className="home-card">
          <h2>Timer</h2>
          <p>Set a relaxation timer with calming music.</p>
        </Link>
      </section>

      <footer className="home-footer">
        <a href="#">About</a>
        <a href="#">Privacy</a>
        <a href="#">Feedback</a>
      </footer>
    </main>
  )
}

export default Home