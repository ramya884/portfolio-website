import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
        alt="profile"
        className="profile-img"
      />

      <h1>Hi! I'm T.Laxmi Sri Ramya</h1>
      <p>Welcome to my portfolio!</p>
      <p>I'm a passionate Computer Science student focused on building responsive web applications.</p>

      <ReactTyped
        strings={[
          'Full Stack Developer',
        ]}
        typeSpeed={80}
        showCursor={true}
        loop={false}
        className="typing-text"
      />
    <div className="hero-buttons">
      <a
        href="/My resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <button className="resume-btn">
          View Resume
        </button>
        </a>
        <button className="hire-btn" onClick={() => navigate('/contact')}>
            Hire Me
        </button>
        </div>
    </section>
  );
}