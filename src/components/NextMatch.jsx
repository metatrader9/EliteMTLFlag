function NextMatch({ match }) {
  return (
    <div className="widget-next-match">
      <div className="widget-title">
        <h3>Next Match</h3>
      </div>
      <div className="widget-body mb-3">
        <div className="widget-vs">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="team-1 text-center">
              <img src={match.team1.logo} alt={match.team1.name} />
              <h3>{match.team1.name}</h3>
            </div>
            <div>
              <span className="vs"><span>VS</span></span>
            </div>
            <div className="team-2 text-center">
              <img src={match.team2.logo} alt={match.team2.name} />
              <h3>{match.team2.name}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center widget-vs-contents mb-4">
        <h4>{match.league}</h4>
        <p className="mb-5">
          <span className="d-block">{match.date}</span>
          <span className="d-block">{match.time}</span>
          <strong className="text-primary">{match.venue}</strong>
        </p>
      </div>
    </div>
  )
}

export default NextMatch
