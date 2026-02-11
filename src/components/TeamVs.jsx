function TeamVs({ match }) {
  const { team1, team2 } = match

  return (
    <div className="team-vs-wrapper">
      <h3 className="team-vs-title">Last Game Results</h3>
      <div className="d-flex team-vs">
        {match.isCompleted && (
          <span className="score">{team1.score}-{team2.score}</span>
        )}
        <div className="team-1 w-50">
          <div className="team-details w-100 text-center">
            <img src={team1.logo} alt={team1.name} className="img-fluid" />
            <h3>
              {team1.name} 
              {match.isCompleted && team1.result && <span>({team1.result})</span>}
            </h3>
            {team1.scorers && team1.scorers.length > 0 && (
              <ul className="list-unstyled">
                {team1.scorers.map((scorer, index) => (
                  <li key={index}>{scorer}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="team-2 w-50">
          <div className="team-details w-100 text-center">
            <img src={team2.logo} alt={team2.name} className="img-fluid" />
            <h3>
              {team2.name}
              {match.isCompleted && team2.result && <span>({team2.result})</span>}
            </h3>
            {team2.scorers && team2.scorers.length > 0 && (
              <ul className="list-unstyled">
                {team2.scorers.map((scorer, index) => (
                  <li key={index}>{scorer}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamVs
