import { useState, useEffect, useRef } from 'react'

function Carousel({ children, itemsPerView = 3 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const trackRef = useRef(null)
  const items = Array.isArray(children) ? children : [children]
  const totalItems = items.length

  useEffect(() => {
    const updateItemWidth = () => {
      const containerWidth = trackRef.current?.parentElement?.offsetWidth || 0
      const calculatedWidth = containerWidth / itemsPerView
      setItemWidth(calculatedWidth)
    }

    updateItemWidth()
    window.addEventListener('resize', updateItemWidth)
    return () => window.removeEventListener('resize', updateItemWidth)
  }, [itemsPerView])

  const maxIndex = Math.max(0, totalItems - itemsPerView)

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className="carousel-container">
      <div 
        className="carousel-track" 
        ref={trackRef}
        style={{ 
          transform: `translateX(-${currentIndex * itemWidth}px)`,
          transition: 'transform 0.5s ease'
        }}
      >
        {items.map((child, index) => (
          <div 
            key={index} 
            className="carousel-item"
            style={{ flex: `0 0 ${100 / itemsPerView}%` }}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="carousel-nav mt-4">
        <button onClick={goToPrev} disabled={currentIndex === 0}>
          <span className="icon-keyboard_arrow_left"></span>
        </button>
        <button onClick={goToNext} disabled={currentIndex >= maxIndex}>
          <span className="icon-keyboard_arrow_right"></span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
