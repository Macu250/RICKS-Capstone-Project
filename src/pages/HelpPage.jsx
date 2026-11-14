import { useEffect, useState } from 'react'
import yaml from 'js-yaml'

function HelpPage() {
  const [page, setPage] = useState({})
  const [resources, setResources] = useState([])

  useEffect(() => {
    async function loadHelp() {
      try {
        // Read YAML from the public folder
        const response = await fetch(`${import.meta.env.BASE_URL}help.yaml`)

        if (!response.ok) {
          throw new Error('Failed to load help yaml')
        }

        // Convert YAML to JS
        const text = await response.text()
        const data = yaml.load(text)

        // Store data
        setPage(data.page || {})
        setResources(data.resources || [])
      } catch (error) {
        console.error('Error loading help resources:', error)
      }
    }

    loadHelp()
  }, [])

  return (
    <div>
      <div className="page-header">
        <h2>{page.title || 'Help & Support'}</h2>
        {page.description && <p>{page.description}</p>}
      </div>

      <div className="card-grid">
        {resources.map((resource, index) => (
          <div key={index} className="card">
            <h3>{resource.title}</h3>
            {resource.description && <p>{resource.description}</p>}
            {resource.url && (
              <iframe
                className="help-video"
                src={resource.url}
                title={resource.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HelpPage
