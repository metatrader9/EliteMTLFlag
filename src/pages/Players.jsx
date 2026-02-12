import { useState, useRef, useEffect } from 'react'
import Hero from '../components/Hero'
import VideoCard from '../components/VideoCard'
import PlayerCard from '../components/PlayerCard'
import Carousel from '../components/Carousel'
import { players } from '../data/siteData'

// Helper function to format stat names
const formatStatName = (statKey) => {
  const statNames = {
    gamesPlayed: 'GP',
    touchdowns: 'TD',
    passingYards: 'PASS YDS',
    completions: 'CMP',
    interceptions: 'INT',
    rating: 'RTG',
    receptions: 'REC',
    receivingYards: 'REC YDS',
    targets: 'TGT',
    avgYards: 'AVG',
    tackles: 'TKL',
    passDeflections: 'PD',
    forcedFumbles: 'FF',
    sacks: 'SCK',
    flagPulls: 'FP',
    rushingYards: 'RUSH YDS',
    carries: 'CAR',
    fumbles: 'FUM'
  }
  return statNames[statKey] || statKey
}

// Stats Table Component
const PlayerStatsTable = ({ players, position, onClose, tableHeight }) => {
  if (!players || players.length === 0) return null

  // Get stat keys from the first player
  const statKeys = players[0]?.stats ? Object.keys(players[0].stats) : []

  // Create 20 rows - fill with empty rows if needed
  const rows = [...players]
  while (rows.length < 20) {
    rows.push(null)
  }

  return (
    <div className="stats-table-container" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid #333',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      animation: 'fadeIn 0.3s ease-in-out',
      height: tableHeight ? `${tableHeight}px` : 'auto',
      minHeight: '500px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 style={{ color: '#fff', margin: 0, fontSize: '18px' }}>
          <span style={{ color: '#f8b739' }}>{position}</span> Weekly Leaders
        </h4>
        <button 
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '0 10px',
            lineHeight: 1
          }}
        >
          &times;
        </button>
      </div>
      <div style={{ overflowX: 'auto', overflowY: 'auto', flex: 1 }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          color: '#fff',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #f8b739' }}>
              <th style={{ padding: '10px 12px', textAlign: 'center', color: '#f8b739', position: 'sticky', top: 0, background: '#1a1a2e', minWidth: '50px' }}>#</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', color: '#f8b739', position: 'sticky', top: 0, background: '#1a1a2e', minWidth: '150px' }}>Player</th>
              {statKeys.map(key => (
                <th key={key} style={{ padding: '10px 12px', textAlign: 'center', color: '#f8b739', whiteSpace: 'nowrap', position: 'sticky', top: 0, background: '#1a1a2e', minWidth: '70px' }}>
                  {formatStatName(key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((player, index) => (
              <tr 
                key={player?.id || `empty-${index}`}
                style={{ 
                  borderBottom: '1px solid #333',
                  background: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  height: '36px'
                }}
              >
                <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 'bold', color: player ? '#fff' : '#444' }}>
                  {player ? player.number : '-'}
                </td>
                <td style={{ padding: '8px 12px', whiteSpace: 'nowrap' }}>
                  {player ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img 
                        src={player.image} 
                        alt={player.name}
                        style={{ 
                          width: '28px', 
                          height: '28px', 
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #f8b739'
                        }}
                      />
                      <span style={{ fontWeight: '500' }}>{player.name}</span>
                    </div>
                  ) : (
                    <span style={{ color: '#444' }}>-</span>
                  )}
                </td>
                {statKeys.map(key => (
                  <td key={key} style={{ padding: '8px 12px', textAlign: 'center', color: player ? '#fff' : '#444' }}>
                    {player ? player.stats[key] : '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Players() {
  const [filter, setFilter] = useState('all')
  const [showStats, setShowStats] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [cardsHeight, setCardsHeight] = useState(0)
  const cardsRef = useRef(null)

  const positions = ['all', ...new Set(players.map(p => p.position))]

  // Get one player per position for the main "all" view
  const getOnePerPosition = () => {
    const seen = new Set()
    return players.filter(p => {
      if (seen.has(p.position)) return false
      seen.add(p.position)
      return true
    })
  }

  const filteredPlayers = filter === 'all'
    ? getOnePerPosition()
    : players.filter(p => p.position === filter)

  // Measure cards height when filtered players change
  useEffect(() => {
    if (cardsRef.current && showStats) {
      setTimeout(() => {
        const height = cardsRef.current.offsetHeight
        setCardsHeight(height)
      }, 100)
    }
  }, [filteredPlayers, showStats])

  const handlePositionClick = (pos) => {
    if (pos === 'all') {
      setFilter('all')
      setShowStats(false)
      setSelectedPosition(null)
    } else {
      setFilter(pos)
      setSelectedPosition(pos)
      setShowStats(true)
    }
  }

  const closeStats = () => {
    setShowStats(false)
    setSelectedPosition(null)
  }

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(10px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
      
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
              <div className="tier-box-image tier-elite-box">
                <span className="starlight starlight-1"></span>
                <span className="starlight starlight-2"></span>
                <span className="starlight starlight-3"></span>
                <span className="starlight starlight-4"></span>
                <img src="/images/tier-elite.png" alt="Elite Players" />
                <div className="tier-label tier-label-elite">
                  <span className="tier-icon"></span>
                  <span className="tier-name">ELITE</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="tier-box-image tier-gold-box">
                <span className="starlight starlight-1"></span>
                <span className="starlight starlight-2"></span>
                <span className="starlight starlight-3"></span>
                <span className="starlight starlight-4"></span>
                <img src="/images/tier-gold.png" alt="Gold Players" />
                <div className="tier-label tier-label-gold">
                  <span className="tier-icon"></span>
                  <span className="tier-name">GOLD</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="tier-box-image tier-silver-box">
                <span className="starlight starlight-1"></span>
                <span className="starlight starlight-2"></span>
                <span className="starlight starlight-3"></span>
                <span className="starlight starlight-4"></span>
                <img src="/images/tier-silver.png" alt="Silver Players" />
                <div className="tier-label tier-label-silver">
                  <span className="tier-icon"></span>
                  <span className="tier-name">SILVER</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="tier-box-image tier-bronze-box">
                <span className="starlight starlight-1"></span>
                <span className="starlight starlight-2"></span>
                <span className="starlight starlight-3"></span>
                <span className="starlight starlight-4"></span>
                <img src="/images/tier-bronze.png" alt="Bronze Players" />
                <div className="tier-label tier-label-bronze">
                  <span className="tier-icon"></span>
                  <span className="tier-name">BRONZE</span>
                </div>
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

      {/* Weekly Leaders Section */}
      <div className="container site-section">
        <div className="row mb-4">
          <div className="col-lg-6 title-section">
            <h2 className="heading">Weekly Leaders</h2>
          </div>
          <div className="col-lg-6 text-right">
            <div className="d-flex justify-content-end" style={{ gap: '10px', flexWrap: 'wrap' }}>
              {positions.map((pos) => (
                <button
                  key={pos}
                  className={`btn ${filter === pos ? 'btn-primary' : ''}`}
                  onClick={() => handlePositionClick(pos)}
                  style={{
                    textTransform: 'uppercase',
                    background: filter === pos ? '' : '#111111',
                    border: filter === pos ? '1px solid #f8b739' : '1px solid #333333',
                    transition: 'all 0.2s ease',
                    fontWeight: 'bold',
                    fontSize: '13px'
                  }}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Side by side layout: Cards on left, Stats Table on right */}
        <div className="row" style={{ alignItems: 'stretch' }}>
          <div className={showStats && selectedPosition ? 'col-lg-4' : 'col-lg-12'} ref={cardsRef}>
            <div className="row">
              {filteredPlayers.slice(0, showStats ? 5 : filteredPlayers.length).map((player) => (
                <div key={player.id} className={showStats && selectedPosition ? 'col-12 mb-3' : 'col-lg-4 col-md-6 mb-4'}>
                  <PlayerCard player={player} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats Table - Right side, matches cards height */}
          {showStats && selectedPosition && (
            <div className="col-lg-8">
              <PlayerStatsTable 
                players={filteredPlayers} 
                position={selectedPosition}
                onClose={closeStats}
                tableHeight={cardsHeight}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Players
