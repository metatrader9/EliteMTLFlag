function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <img src={player.image} alt={player.name} />
      <div className="player-info">
        <span className="number">#{player.number}</span>
        <h3>{player.name}</h3>
        <span className="position">{player.position}</span>
      </div>
    </div>
  )
}

export default PlayerCard
