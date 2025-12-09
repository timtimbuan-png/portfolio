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
          <li><a href="#certificates">Certificates</a></li>
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
            <p>Username: admin Password: 1234</p>
            <a className="btn" href="https://book-snowy-three.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          {/* PROJECT CARD 2 */}
          <div className="project-card">
            <h3>MobApp</h3>
            <p>My Mobile App.</p>
            <a className="btn" href="https://appetize.io/embed/b_clf3yzcnyyg5af25nlkyh7d7ty?device=pixel9pro" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          {/* PROJECT CARD 2 */}
          <div className="project-card">
            <h3>Budget Tracker</h3>
            <p> Mobile App.</p>
            <a className="btn" href="https://appetize.io/embed/b_clf3yzcnyyg5af25nlkyh7d7ty?device=pixel9pro&launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A54.0.0%26channel-name%3Dproduction%26snack%3D%2540timmy_20%252Fbudget-tracker%26snack-channel%3Dd3pfFH2MI2&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&appearance=light&deviceColor=black&scale=auto&orientation=portrait&centered=both" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

           <div className="project-card">
            <h3>Budget Tracker</h3>
            <p>Web App</p>
            <a className="btn" href="https://budgettrackerr2.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="certificates-section">
        <h2>Certificates</h2>

        <div className="certificate-grid">

          <div className="certificate-card">
            <h3>Web Development Fundamentals</h3>
            <p>Issued by: XYZ Academy</p>
            <a className="btn" href="#" target="_blank">View Certificate</a>
          </div>

          <div className="certificate-card">
            <h3>JavaScript Essentials 1</h3>
            <a className="btn" href="https://www.credly.com/badges/bdc7b339-827c-4e05-a222-ede256a1d24a/public_url" target="_blank">View Certificate</a>
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

