import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KeyboardNavigation from './components/KeyboardNavigation';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Last from './components/Last';

export default function App() {
  return (
    <Router>
      <KeyboardNavigation />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/last" element={<Last />} />
      </Routes>
    </Router>
  );
}