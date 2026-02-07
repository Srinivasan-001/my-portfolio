import './Projects.css';

const projects = [
  {
    title: 'CNC Based Health Monitering System',
    description: 'Developed a CNC machine health monitoring system for real-time monitoring and maintenance of the machine.',
    tech: 'HTML | CSS | JavaScript | Firebase | User Authentication| Realtime Database',
    githubUrl: 'https://github.com/Srinivasan-001/cnc-monitoring-app.git',
  },
  {
    title: 'Covid -19 Detection Using AI model',
    description: 'An AI model that analyzes chest X-ray and CTC scan images to quickly and accurately detect COVID-19 infections',
    tech: 'yolov11n | Pyhton| OpenCV| Flask | HTML | CSS ',
    githubUrl: 'https://github.com/Srinivasan-001/Covid-Detection-using-CT-scan-X-ray.git',
  },
  {
    title: 'Personal Expenses Tracker',
    description: 'A mobile application built with Flutter that helps you track your personal expenses and income.',
    tech: 'Flutter' ,
    githubUrl: 'https://github.com/Srinivasan-001/codsoft_1.git',
  },
  {
    title: 'Music Player',
    description: 'A Flutter-based music player app that lets users browse, play, and control their favorite songs with a clean and interactive UI.',
    tech: 'Flutter' ,
    githubUrl: 'https://github.com/Srinivasan-001/codsoft_3.git',
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
