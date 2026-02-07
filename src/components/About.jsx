import './About.css';
import profilePhoto from '../assets/sri.PNG';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-image-wrapper">
            <div className="profile-image">
              <div className="profile-placeholder">
                <img src={profilePhoto} alt="Srinivasan" />
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
