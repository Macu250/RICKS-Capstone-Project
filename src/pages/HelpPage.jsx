import { useEffect, useState } from 'react'
import loadYaml from '../data/loadYaml'

function HelpPage() {
  const [heading, setHeading] = useState({})
  const [resources, setResources] = useState([])

  useEffect(() => {
    async function loadHelp() {
      try {
        const data = await loadYaml('help.yaml')

        // Store data
        setHeading(data.page || {})
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
        <h2>{heading.title || 'Help & Support'}</h2>
        {heading.description && <p>{heading.description}</p>}
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
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
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
