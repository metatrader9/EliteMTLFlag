import { useState } from 'react'
import Hero from '../components/Hero'
import VideoCard from '../components/VideoCard'
import PlayerCard from '../components/PlayerCard'
import Carousel from '../components/Carousel'
import { players } from '../data/siteData'

function Players() {
  const [filter, setFilter] = useState('all')

  const positions = ['all', ...new Set(players.map(p => p.position))]

  const filteredPlayers = filter === 'all' 
    ? players 
    : players.filter(p => p.position === filter)

  return (
    <>
      <Hero 
        title="Players"
        subtitle="Season 1 begins May 18th 2026"
        backgroundImage="/images/hero-bg.png"
        centered
      />

      {/* Player Tiers */}
      <div className="player-tiers-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 title-section">
              <h2 className="heading">Player Tiers</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="tier-box-image">
                <img src="/images/tier-elite.png" alt="Elite Players" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="tier-box-image">
                <img src="/images/tier-gold.png" alt="Gold Players" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="tier-box-image">
                <img src="/images/tier-silver.png" alt="Silver Players" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="tier-box-image">
                <img src="/images/tier-bronze.png" alt="Bronze Players" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Star Players / Videos */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 title-section">
              <h2 className="heading">Star Players / Videos</h2>
            </div>
          </div>
          <Carousel itemsPerView={3}>
            {players.map((player) => (
              <VideoCard key={player.id} player={player} video={{}} />
            ))}
          </Carousel>
        </div>
      </div>

      {/* Positions */}
      <div className="container site-section">
        <div className="row">
          <div className="col-lg-6 title-section">
            <h2 className="heading">Positions</h2>
          </div>
          <div className="col-lg-6 text-right">
            <div className="d-flex justify-content-end" style={{ gap: '10px' }}>
              {positions.map((pos) => (
                <button
                  key={pos}
                  className={`btn ${filter === pos ? 'btn-primary' : ''}`}
                  onClick={() => setFilter(pos)}
                  style={{ 
                    textTransform: 'capitalize',
                    background: filter === pos ? '' : '#111111',
                    border: '1px solid #333333'
                  }}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          {filteredPlayers.map((player) => (
            <div key={player.id} className="col-lg-4">
              <PlayerCard player={player} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Players
