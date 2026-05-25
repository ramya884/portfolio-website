import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact">
      <div className="sec-title">
      <h1>
        <span className="white-text">Contact</span>
        <span className="blue-text"> Me</span>
      </h1>
      </div>
      <p>
        I am open for internships, projects, collaborations, or any new opportunities.
      </p>

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

      <div className="contact-details">

        <p>Email: lakshmisreeramya218@gmail.com</p>

        <p>Phone: +91 91007 60250</p>

        <p>Location: Kompally, Hyderabad, telangana, India</p>

      </div>

    </section>
  );
}