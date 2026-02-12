import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
import Home from './pages/Home'
import Matches from './pages/Matches'
import Players from './pages/Players'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="site-wrap">
        <MobileMenu />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
