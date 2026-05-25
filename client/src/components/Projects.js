export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">

        <p className="projects-tag">PROJECTS</p>

        <h1>
          My <span>Projects</span>
        </h1>
        
        <p className="projects-desc">
          Here are some projects I developed using modern web technologies,
          backend systems, databases, and image processing tools.
        </p>

      </div>
      <div className="projects-grid">
        <div className="project-card">

          <div className="project-content">

            <h2>Lost and Found Items Finder</h2>

            <p>
              Developed a web-based system to identify lost items by comparing
              user-uploaded images with CCTV images.
            </p>

            <p>
              Implemented image preprocessing and feature extraction using
              OpenCV and Jimp. Used MongoDB Atlas to store images and
              display matching CCTV results.
            </p>

            <div className="tech-stack">
              <span>Frontend</span>
              <span>Backend</span>
              <span>MongoDB</span>
              <span>OpenCV</span>
              <span>Jimp</span>
            </div>

            <div className="project-buttons">
              <a href="/">Live Demo</a>

              <button className="private-btn">
                Private Repo
              </button>
            </div>

          </div>

        </div>
        <div className="project-card">

          <div className="project-content">

            <h2>Environment and Resource Management</h2>

            <p>
              Developed an environment and resource management system to
              collect, organize, and analyze project-related data.
            </p>

            <p>
              Studied environmental issues and efficient utilization of
              natural resources while gaining practical understanding
              of environmental management concepts.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>Sensors</span>
              <span>Database</span>
            </div>

            <div className="project-buttons">
              <a href="/">Live Demo</a>

              <button className="private-btn">
                Private Repo
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}