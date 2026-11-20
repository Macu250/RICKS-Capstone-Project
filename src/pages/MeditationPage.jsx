// Shows the meditation videos from meditation.yaml

import { useEffect, useState } from 'react'
import loadYaml from '../data/loadYaml'

function MeditationPage() {
  const [heading, setHeading] = useState({})
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function loadMeditation() {
      try {
        const data = await loadYaml('meditation.yaml')

        // Store data
        setHeading(data.page || {})
        setVideos(data.resources || [])
      } catch (error) {
        console.error('Error loading meditation videos:', error)
      }
    }

    loadMeditation()
  }, [])

  return (
    <div>
      <div className="page-header">
        <h2>{heading.title || 'Meditation'}</h2>
        {heading.description && <p>{heading.description}</p>}
      </div>

      <div className="card-grid">
        {videos.map((video, index) => (
          <div key={index} className="card">
            <h3>{video.title}</h3>
            {video.description && <p>{video.description}</p>}
            {video.url && (
              <iframe
                className="help-video"
                src={video.url}
                title={video.title}
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

export default MeditationPage
