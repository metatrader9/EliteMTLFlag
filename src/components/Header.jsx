import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/matches', label: 'Games' },
    { path: '/players', label: 'Players' },
    { path: '/blog', label: 'Rankings' },
    { path: '/contact', label: 'Contact' }
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Dispatch custom event for mobile menu
    window.dispatchEvent(new CustomEvent('toggleMobileMenu', { detail: !mobileMenuOpen }))
  }

  return (
    <header className="site-navbar py-4" role="banner">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <nav className="site-navigation" role="navigation">
            <ul className="site-menu main-menu">
              {navLinks.map((link) => (
                <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
                  <Link to={link.path} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="site-menu-toggle d-lg-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="icon-menu h3 text-white"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
