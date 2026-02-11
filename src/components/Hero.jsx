function Hero({ title, subtitle, backgroundImage, children, centered = false }) {
  return (
    <div className="hero hero-black">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="hero-image">
              <img src={backgroundImage || '/images/hero-bg.png'} alt="Hero" />
            </div>
          </div>
          <div className={`col-lg-7 ${centered ? 'text-center' : ''}`}>
            <h1 className="text-white">{title}</h1>
            {subtitle && <p>{subtitle}</p>}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
