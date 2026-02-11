import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/matches', label: 'Games' },
    { path: '/players', label: 'Players' },
    { path: '/blog', label: 'Rankings' },
    { path: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleToggle = (e) => {
      setIsOpen(e.detail)
    }
    window.addEventListener('toggleMobileMenu', handleToggle)
    return () => window.removeEventListener('toggleMobileMenu', handleToggle)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className={`site-mobile-menu ${isOpen ? 'active' : ''}`}>
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close" onClick={closeMenu}>
          <span className="icon-close2"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
              <Link to={link.path} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
