import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">My Portfolio</h1>

      <div className="nav-links">
        <Link to="/"> Home  </Link>
        <Link to="/about"> About  </Link>
        <Link to="/skills"> Skills  </Link>
        <Link to="/projects"> Projects  </Link>
        <Link to="/certificates"> Certificates  </Link>
        <Link to="/contact"> Contact  </Link>
        <Link to="./last"> Last  </Link>
      </div>
    </nav>
  );
}