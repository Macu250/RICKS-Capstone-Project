// Shows a list of stretching playlists from flexibility.yaml.
// Clicking a playlist plays it. The Back button returns to the list.

import { useEffect, useState } from 'react'
import loadYaml from '../data/loadYaml'
import './FlexibilityPage.css'

function FlexibilityPage() {
  const [heading, setHeading] = useState({})
  const [playlists, setPlaylists] = useState([])

  // The playlist the user clicked on. Empty means show the list.
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)

  useEffect(() => {
    async function loadFlexibility() {
      try {
        const data = await loadYaml('flexibility.yaml')

        // Store data
        setHeading(data.page || {})
        setPlaylists(data.resources || [])
      } catch (error) {
        console.error('Error loading flexibility playlists:', error)
      }
    }

    loadFlexibility()
  }, [])

  // If a playlist was clicked, show the video player for it
  if (selectedPlaylist) {
    return (
      <div>
        <div className="page-header">
          <h2>{selectedPlaylist.title}</h2>
          {selectedPlaylist.description && <p>{selectedPlaylist.description}</p>}
        </div>

        <button className="button button-soft" onClick={() => setSelectedPlaylist(null)}>
          ← Back to playlists
        </button>

        <div className="card playlist-player">
          <iframe
            className="help-video"
            src={selectedPlaylist.url}
            title={selectedPlaylist.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    )
  }

  // Otherwise show the list of playlists
  return (
    <div>
      <div className="page-header">
        <h2>{heading.title || 'Flexibility'}</h2>
        {heading.description && <p>{heading.description}</p>}
      </div>

      <div className="card-grid">
        {playlists.map((playlist, index) => (
          <button
            key={index}
            className="card playlist-card"
            onClick={() => setSelectedPlaylist(playlist)}
          >
            <h3>{playlist.title}</h3>
            {playlist.description && <p>{playlist.description}</p>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FlexibilityPage
