import Hero from '../components/Hero'

function About() {
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

  const features = [
    {
      icon: '',
      title: 'Elite Competition',
      description: 'Compete against the best flag football talent in Montreal. Multiple skill tiers ensure fair, competitive matchups.'
    },
    {
      icon: '',
      title: 'VIP Championship Experience',
      description: 'Finalists arrive in luxury sprinter vans. Excellence deserves excellence.'
    },
    {
      icon: '',
      title: 'Full Media Coverage',
      description: 'Professional filming, highlights, and social media features for every game.'
    },
    {
      icon: '',
      title: 'Player Statistics',
      description: 'Detailed stats tracking for every player. Build your reputation with real numbers.'
    }
  ]

  const leagueInfo = [
    {
      icon: '',
      title: 'EF Combine',
      description: "Test your skills at the EF Combine. Speed, agility, route-running, and defensive drills. Rankings published."
    },
    {
      icon: '',
      title: 'League Rules',
      description: 'Clear rules covering gameplay, scoring, penalties, roster limits, and conduct standards.'
    },
    {
      icon: '',
      title: 'Season Schedule',
      description: 'Regular season games every weekend. Playoffs in August. Championship game Labor Day weekend.'
    },
    {
      icon: '',
      title: 'Become a Sponsor',
      description: 'Premium brand exposure, social media features, and direct engagement with athletes and fans.'
    }
  ]

  return (
    <>
      <Hero
        title="About Elite Flag"
        subtitle="Montreal's Premier Flag Football League  Season 1 Begins May 18th, 2026"
        backgroundImage="/images/hero-bg.png"
        centered
      />

      {/* Mission Statement */}
      <div style={{ 
        background: 'linear-gradient(180deg, #000 0%, #111 100%)',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 style={{ 
                color: '#dc3545', 
                fontSize: '36px', 
                fontWeight: 'bold',
                marginBottom: '25px'
              }}>
                Where Athletes Become Legends
              </h2>
              <p style={{ 
                color: '#ccc', 
                fontSize: '18px', 
                lineHeight: '1.8',
                marginBottom: '0'
              }}>
                Elite Flag is more than a league  it's a movement. We bring together Montreal's 
                most competitive athletes for high-stakes flag football with professional production, 
                detailed statistics, and an unmatched game-day experience. Whether you're a seasoned 
                player or picking up a football for the first time, there's a place for you here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Section */}
      <div style={{ 
        background: '#0a0a0a',
        padding: '80px 0'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 style={{ color: '#fff', fontSize: '32px', fontWeight: 'bold' }}>
                Why <span style={{ color: '#dc3545' }}>Elite Flag</span>?
              </h2>
            </div>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #111 100%)',
                  borderRadius: '16px',
                  padding: '35px 25px',
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid #333',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = '#dc3545'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = '#333'
                }}>
                  <div style={{ fontSize: '50px', marginBottom: '20px' }}>{feature.icon}</div>
                  <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div style={{ 
        background: 'linear-gradient(180deg, #111 0%, #000 100%)',
        padding: '80px 0'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 style={{ color: '#fff', fontSize: '32px', fontWeight: 'bold' }}>
                Our <span style={{ color: '#dc3545' }}>Sponsors</span>
              </h2>
              <p style={{ color: '#888', fontSize: '16px', marginTop: '10px' }}>
                Proudly supported by Montreal's finest
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="col-lg-5 col-md-6 mb-4">
                <div style={{
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
                }}>
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
      </div>

      {/* League Info Section */}
      <div style={{ 
        background: '#0a0a0a',
        padding: '80px 0'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 style={{ color: '#fff', fontSize: '32px', fontWeight: 'bold' }}>
                League <span style={{ color: '#dc3545' }}>Information</span>
              </h2>
            </div>
          </div>
          <div className="row">
            {leagueInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div style={{
                  background: 'transparent',
                  borderRadius: '12px',
                  padding: '30px 20px',
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid #333',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(220, 53, 69, 0.05)'
                  e.currentTarget.style.borderColor = '#dc3545'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = '#333'
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>{info.icon}</div>
                  <h3 style={{ color: '#dc3545', fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>
                    {info.title}
                  </h3>
                  <p style={{ color: '#777', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #dc3545 0%, #b02a37 100%)',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 'bold', marginBottom: '15px' }}>
            Ready to Compete?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', marginBottom: '25px' }}>
            Registration is now open for Season 1. Join the movement.
          </p>
          <a 
            href="/contact" 
            style={{
              display: 'inline-block',
              background: '#fff',
              color: '#dc3545',
              padding: '15px 40px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#000'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff'
              e.currentTarget.style.color = '#dc3545'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            Register Your Team 
          </a>
        </div>
      </div>
    </>
  )
}

export default About
