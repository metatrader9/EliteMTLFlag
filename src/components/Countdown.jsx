import { useState, useEffect } from 'react'

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{String(timeLeft.days).padStart(2, '0')}</span>
        <small>Days</small>
      </div>
      <div className="countdown-item">
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
        <small>Hours</small>
      </div>
      <div className="countdown-item">
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <small>Minutes</small>
      </div>
      <div className="countdown-item">
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        <small>Seconds</small>
      </div>
    </div>
  )
}

export default Countdown
