// A list of lessons about chronic pain.
// For now each card only shows the lesson number and title.

import './EducationPage.css'

const lessons = [
  { id: 1, title: 'What is chronic pain?' },
  { id: 2, title: 'The pain and stress cycle' },
  { id: 3, title: 'Pacing your activities' },
  { id: 4, title: 'Why gentle movement helps' },
  { id: 5, title: 'Sleep and pain' },
  { id: 6, title: 'Talking with your care team' },
]

function EducationPage() {
  return (
    <div>
      <div className="page-header">
        <h2>Learn About Pain</h2>
        <p>Understanding your pain can make it more manageable.</p>
      </div>

      <div className="card-grid">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="card lesson-card">
            <span className="lesson-number">Lesson {lesson.id}</span>
            <h3>{lesson.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationPage