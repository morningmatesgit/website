function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          We build <span>Future-Ready</span> digital solutions
        </h1>
        <p>
          Empowering businesses with cutting-edge technology and modern design.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>

          <a
            href="https://calendly.com/morningmates/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
