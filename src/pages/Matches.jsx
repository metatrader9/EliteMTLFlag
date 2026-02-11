import Hero from '../components/Hero'
import TeamVs from '../components/TeamVs'
import Countdown from '../components/Countdown'
import LeagueTable from '../components/LeagueTable'
import { matches } from '../data/siteData'

function Matches() {
  const completedMatches = matches.filter(m => m.isCompleted)
  const upcomingMatches = matches.filter(m => !m.isCompleted)
  const nextMatch = upcomingMatches[0]

  return (
    <>
      <Hero 
        title="Games"
        subtitle="Season 1 begins May 18th 2026"
        backgroundImage="/images/hero-bg.png"
        centered
      />

      {/* Latest Match Result */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {completedMatches[0] && <TeamVs match={completedMatches[0]} />}
          </div>
        </div>
      </div>

      {/* Next Match Section */}
      <div className="site-section bg-dark">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12">
              {nextMatch && (
                <div className="widget-next-match">
                  <div className="widget-title">
                    <h3>Next Match</h3>
                  </div>
                  <div className="widget-body mb-3">
                    <div className="widget-vs">
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="team-1 text-center">
                          <img src={nextMatch.team1.logo} alt={nextMatch.team1.name} />
                          <h3>{nextMatch.team1.name}</h3>
                        </div>
                        <div>
                          <span className="vs"><span>VS</span></span>
                        </div>
                        <div className="team-2 text-center">
                          <img src={nextMatch.team2.logo} alt={nextMatch.team2.name} />
                          <h3>{nextMatch.team2.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center widget-vs-contents mb-4">
                    <h4>{nextMatch.league}</h4>
                    <p className="mb-5">
                      <span className="d-block">{nextMatch.date}</span>
                      <span className="d-block">{nextMatch.time}</span>
                      <strong className="text-primary">{nextMatch.venue}</strong>
                    </p>
                    <Countdown targetDate="2026-05-18T09:30:00" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Upcoming Games */}
          <div className="row">
            <div className="col-lg-12 title-section">
              <h2 className="heading">Upcoming Games</h2>
            </div>
          </div>
          <div className="row">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="col-lg-6 mb-4">
                <div className="upcoming-match">
                  <div className="widget-body">
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
                  <div className="text-center widget-vs-contents">
                    <h4>{match.league}</h4>
                    <p>
                      <span className="d-block">{match.date}</span>
                      <span className="d-block">{match.time}</span>
                      <strong className="text-primary">{match.venue}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* League Standings */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 title-section">
              <h2 className="heading">League Standings</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <LeagueTable />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Matches
