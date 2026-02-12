import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import TeamVs from '../components/TeamVs'
import Countdown from '../components/Countdown'
import LeagueTable from '../components/LeagueTable'
import NewsCard from '../components/NewsCard'
import VideoCard from '../components/VideoCard'
import BlogCard from '../components/BlogCard'
import Carousel from '../components/Carousel'
import { matches, blogPosts, videos } from '../data/siteData'

function Home() {
  const completedMatch = matches.find(m => m.isCompleted)
  const nextMatch = matches.find(m => !m.isCompleted)
  const latestNews = blogPosts.slice(0, 3)
  const latestBlogs = blogPosts.slice(0, 2)

  const sponsors = [
    {
      id: 1,
      image: '/images/LSSprinters.png',
      name: 'LuxSprintersMTL',
      description: 'Official transportation partner. Championship teams ride in style.',
      imageStyle: { background: 'white', padding: '15px', borderRadius: '12px' }
    },
    {
      id: 2,
      image: '/images/VSlogo.png',
      name: 'Vision Sécurité Inc.',
      description: 'Official security partner. Ensuring safe, professional events.',
      imageStyle: {}
    }
  ]

  return (
    <>
      <Hero
        title="Play Hard. Run Fast. Flag Faster."
        subtitle="Season 1 begins May 18th 2026"
        backgroundImage="/images/hero-bg.png"
      >
        {nextMatch && <Countdown targetDate="2026-05-18T09:30:00" />}
        <p className="mt-4">
          <Link to="/contact" className="btn btn-primary py-3 px-4 mr-3">Sign Up</Link>
          <Link to="/matches" className="more light">Learn More</Link>
        </p>
      </Hero>

      {/* Last Game Results */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {completedMatch && <TeamVs match={completedMatch} />}
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="latest-news">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 title-section">
              <h2 className="heading">Latest News</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="news-box-image">
                <img src="/images/news-box-1.png" alt="Season Buy-In & Referral Bonus" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-box-image">
                <img src="/images/news-box-2.png" alt="Championship Rewards" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-box-image">
                <img src="/images/news-box-3.png" alt="Live Player Rankings" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Match & League Table */}
      <div className="site-section bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
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
            <div className="col-lg-6">
              <LeagueTable />
            </div>
          </div>
        </div>
      </div>

      {/* Videos */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 title-section">
              <h2 className="heading">Videos</h2>
            </div>
          </div>
          <Carousel itemsPerView={3}>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </Carousel>
        </div>
      </div>

      {/* Our Sponsors */}
      <div className="container site-section">
        <div className="row">
          <div className="col-lg-12 title-section">
            <h2 className="heading">Our Sponsors</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="col-lg-5 col-md-6 mb-4">
              <div 
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
                  borderRadius: '20px',
                  padding: '40px',
                  height: '100%',
                  textAlign: 'center',
                  border: '2px solid #222',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#dc3545'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(220, 53, 69, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#222'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ marginBottom: '25px', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={sponsor.image} 
                    alt={sponsor.name}
                    style={{ 
                      maxWidth: '200px', 
                      maxHeight: '100px', 
                      objectFit: 'contain',
                      ...sponsor.imageStyle
                    }}
                  />
                </div>
                <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 'bold', marginBottom: '12px' }}>
                  {sponsor.name}
                </h3>
                <p style={{ color: '#888', fontSize: '15px', margin: 0 }}>
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
