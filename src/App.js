import './App.css';

function App() {
  return (
    <div className="App">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Timothy Portfolio</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="hero">
        <h1>Hi, I'm <span className="highlight">Timothy</span></h1>
        <p>Web Developer • Python • Django • React</p>
        <a href="#projects" className="btn">View My Projects</a>
      </header>

      {/* PROJECT SECTION */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>

        <div className="project-grid">

          {/* PROJECT CARD 1 */}
          <div className="project-card">
            <h3>Book-Management</h3>
            <p>CRUD system with authentication, search, bootstrap UI.</p>
            <a className="btn" href="https://portfolio-eight-mu-v0c46ib9qi.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          {/* PROJECT CARD 2 */}
          <div className="project-card">
            <h3>React Portfolio</h3>
            <p>A personal portfolio built in ReactJS.</p>
            <a className="btn" href="#" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Email: <strong>your-email@gmail.com</strong></p>
      </section>
    </div>
  );
}

export default App;

