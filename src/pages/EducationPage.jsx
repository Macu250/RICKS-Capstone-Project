// For now each card only shows the lesson number and title.

import './EducationPage.css'

const lessons = [
  { id: 1, title: 'What is chronic pain?' },
  { id: 2, title: 'How pain and stress relate' },
  { id: 3, title: 'Managing your activities' },
  { id: 4, title: 'How can movement help with pain' },
  { id: 5, title: 'Sleep and pain' },
  { id: 6, title: 'Talking with your doctor' },
]

function EducationPage() {
  return (
    <div>
      <div className="page-header">
        <h2>Learn About Pain</h2>
        <p>Understanding your pain can make more manageable.</p>
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