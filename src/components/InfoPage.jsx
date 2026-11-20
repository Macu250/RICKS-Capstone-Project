
import { useEffect, useState } from 'react'
import yaml from 'js-yaml'

function InfoPage({ file }) {
  const [page, setPage] = useState({})
  const [sections, setSections] = useState([])

  useEffect(() => {
    async function loadPage() {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}${file}`
        )

        if (!response.ok) {
          throw new Error('Failed to load page')
        }

        const text = await response.text()
        const data = yaml.load(text)

        setPage(data.page || {})
        setSections(data.sections || [])
      } catch (error) {
        console.error('Error loading page:', error)
      }
    }

    loadPage()
  }, [file])

  return (
    <div>
      <div className="page-header">
        <h2>{page.title}</h2>
        <p>{page.description}</p>
      </div>

      <div className="card-grid">
        {sections.map((section, index) => (
          <div className="card" key={index}>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoPage
