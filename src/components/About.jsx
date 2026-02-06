import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-image-wrapper">
            <div className="profile-image">
              <div className="profile-placeholder">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="60" fill="url(#gradient)" />
                  <path d="M60 35C50.06 35 42 43.06 42 53C42 62.94 50.06 71 60 71C69.94 71 78 62.94 78 53C78 43.06 69.94 35 60 35ZM60 75C48.95 75 40 83.95 40 95H80C80 83.95 71.05 75 60 75Z" fill="white" opacity="0.9"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="120" y2="120">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="about-description">
              I'm a passionate ECE student with a deep interest in web development and artificial intelligence. 
              I love building innovative solutions that combine cutting-edge technology with practical applications. 
              From computer vision projects using OpenCV to IoT systems and mobile applications, I enjoy exploring 
              the intersection of hardware and software.
            </p>
            <p className="about-description">
              My journey in tech has led me to work on diverse projects ranging from sleep detection systems 
              to smart irrigation solutions. I'm always eager to learn new technologies and take on challenging 
              problems that push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
