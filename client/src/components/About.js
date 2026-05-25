import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
export default function About() {
  return (
    <section className="about-section" id="about">
  <div className="about-container">
    <div className="about-left">
      <p className="section-tag">ABOUT ME</p>
      <h2>About <span>Me</span></h2>

      <div className="about-intro">
        <h3>Hello! I'm <span>Laxmi Sri Ramya</span></h3>
        <p>
          Passionate Computer Science student interested in Full Stack
          Development and modern web technologies.
        </p>
        <p>
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. When I'm not coding, you'll find me exploring new technologies,
          contributing to open source, or sharing knowledge with the developer
          community.
        </p>
      </div>

      <div className="contact-icons">
              <div className="icon-box">
                <a href="mailto: lakshmisreeramya218@gmail.com">
                  <FaEnvelope />
                </a>
                <span className="tooltip">Email</span>
              </div>
      
              <div className="icon-box">
                <a href="https://github.com/ramya884">
                  <FaGithub />
                </a>
                <span className="tooltip">GitHub</span>
              </div>
      
              <div className="icon-box">
                <a href="https://linkedin.com/in/t-ramya">
                  <FaLinkedin />
                </a>
                <span className="tooltip">LinkedIn</span>
              </div>
      
            </div>

      
    </div>

    <div className="about-right">
      <div className="info-card">
        <h4>Education</h4>
        <div className="edu-box">
          <h5>B.Tech in Computer Science</h5>
          <p>St. Martin's Engineering College, Hyderabad</p>
          <span>2023 - 2027</span>
        </div>

        <div className="edu-box">
          <h5>Intermediate</h5>
          <p>Siva Sivani Junior College, Hyderabad</p>
          <span>2021 - 2023</span>
        </div>

        <div className="edu-box">
          <h5>SSC</h5>
          <p>St. Anthony's High School, Hyderabad</p>
          <span>2021</span>
        </div>
        <h4>Career Goal</h4>
        <div className="edu-box">
        <p>
          Aspiring Full Stack Developer focused on building scalable and impactful
          web applications.
        </p>
        </div>
      </div>
      </div>
    </div>
</section>
  );
}