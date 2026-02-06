import './Projects.css';

const projects = [
  {
    title: 'Sleep Detection System',
    description: 'An intelligent sleep detection system using OpenCV and computer vision techniques. Monitors facial features and eye movements to detect sleep patterns in real-time, with advanced image processing algorithms.',
    tech: 'OpenCV | Python | Computer Vision',
    githubUrl: '#',
  },
  {
    title: 'Smart Irrigation System',
    description: 'An IoT-based smart irrigation system that monitors soil moisture levels and automatically waters plants when needed. Features real-time sensor data, mobile app integration, and energy-efficient design.',
    tech: 'IoT | Sensors | Embedded Systems',
    githubUrl: '#',
  },
  {
    title: 'Gender Detection App',
    description: 'A mobile application built with Flutter and TensorFlow Lite that uses machine learning to detect gender from facial images. Features a beautiful UI, real-time processing, and high accuracy predictions.',
    tech: 'Flutter | TFLite | Machine Learning',
    githubUrl: '#',
  },
];

function Projects() {
  const handleGitHubClick = (url) => {
    if (url !== '#') {
      window.open(url, '_blank');
    } else {
      alert('GitHub link coming soon!');
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-content">
                <div className="project-number">0{index + 1}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">{project.tech}</div>
                <button 
                  className="project-button"
                  onClick={() => handleGitHubClick(project.githubUrl)}
                >
                  View GitHub
                  <span className="arrow">→</span>
                </button>
              </div>
              <div className="project-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
