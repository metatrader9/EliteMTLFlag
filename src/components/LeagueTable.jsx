import { teams } from '../data/siteData'

function LeagueTable() {
  return (
    <div className="widget-next-match">
      <table className="custom-table">
        <thead>
          <tr>
            <th>P</th>
            <th>Team</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td><strong className="text-white">{team.name}</strong></td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeagueTable
