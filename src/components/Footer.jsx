import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="widget mb-3">
              <h3>News</h3>
              <ul className="list-unstyled links">
                <li><Link to="/blog">All</Link></li>
                <li><Link to="/blog">Club News</Link></li>
                <li><Link to="/blog">Media Center</Link></li>
                <li><Link to="/blog">Video</Link></li>
                <li><Link to="/blog">RSS</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget mb-3">
              <h3>Tickets</h3>
              <ul className="list-unstyled links">
                <li><Link to="/">Online Ticket</Link></li>
                <li><Link to="/">Payment and Prices</Link></li>
                <li><Link to="/contact">Contact &amp; Booking</Link></li>
                <li><Link to="/">Tickets</Link></li>
                <li><Link to="/">Coupon</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget mb-3">
              <h3>Games</h3>
              <ul className="list-unstyled links">
                <li><Link to="/matches">Standings</Link></li>
                <li><Link to="/matches">World Cup</Link></li>
                <li><Link to="/matches">La Lega</Link></li>
                <li><Link to="/matches">Hyper Cup</Link></li>
                <li><Link to="/matches">World League</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget mb-3">
              <h3>Social</h3>
              <ul className="list-unstyled links">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-lg-12">
            <div className="pt-5">
              <p>
                Copyright © {currentYear} All rights reserved | This template is made with{' '}
                <span className="icon-heart" aria-hidden="true"></span> by{' '}
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
