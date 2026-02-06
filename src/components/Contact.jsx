import './Contact.css';

function Contact() {
  const contactLinks = {
    email: 'mailto:your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
  };

  const handleContactClick = (type, url) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      alert(`${type} link coming soon!`);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-card">
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-links">
            <a 
              href={contactLinks.email}
              className="contact-link"
              onClick={(e) => {
                e.preventDefault();
                handleContactClick('Email', contactLinks.email);
              }}
            >
              <div className="contact-icon">✉️</div>
              <span>Email</span>
            </a>
            <a 
              href={contactLinks.linkedin}
              className="contact-link"
              onClick={(e) => {
                e.preventDefault();
                handleContactClick('LinkedIn', contactLinks.linkedin);
              }}
            >
              <div className="contact-icon">💼</div>
              <span>LinkedIn</span>
            </a>
            <a 
              href={contactLinks.github}
              className="contact-link"
              onClick={(e) => {
                e.preventDefault();
                handleContactClick('GitHub', contactLinks.github);
              }}
            >
              <div className="contact-icon">💻</div>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
