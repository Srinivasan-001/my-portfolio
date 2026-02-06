import './Hero.css';

function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Placeholder - you can add actual resume download logic here
    alert('Resume download coming soon!');
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="gradient-text">SRINIVASAN</span>
        </h1>
        <p className="hero-title">ECE Student | Web & AI Developer</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
}

export default Hero;
