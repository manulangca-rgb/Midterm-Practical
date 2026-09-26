import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("Thanks for your message!");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="logo" href="#home" onClick={closeMenu}>
            Nick Young<span>.</span>
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" className="nav-link active" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" className="nav-link" onClick={closeMenu}>
              About Me
            </a>

            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contact Me
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">STUDENT PORTFOLIO</p>

            <h1>
              Hello, I'm <span>Nick Ulangca.</span>
            </h1>

            <p className="hero-text">
              This project is a simple student profile webpage. It's complete
              with a navigation bar to different sections, home, about me and
              contacts.
            </p>
          </div>

          <div className="hero-card">
            <div className="card-content">
              <div className="image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzA8lvVrdB1U8aMRkTYHUnoqKPeh36PqgpITTeHajU-XfGGCDau1kVYrU&s=10"
                  alt="Nick Ulangca"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about section">
          <div>
            <p className="eyebrow">ABOUT ME</p>

            <h2>A curious student with a creative mindset.</h2>
          </div>

          <div className="about-copy">
            <p>
              I'm Nick, a student interested in web design and technology. I
              enjoy experimenting with layouts, colors, and interactive ideas
              while continuously improving my skills.
            </p>

            <div className="skill-grid">
              <div className="skill">
                HTML <span>01</span>
              </div>

              <div className="skill">
                CSS <span>02</span>
              </div>

              <div className="skill">
                JavaScript <span>03</span>
              </div>

              <div className="skill">
                Creativity <span>04</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact section">
          <div className="contact-intro">
            <p className="eyebrow">CONTACT ME</p>

            <h2>Let's connect.</h2>

            <p>
              Have a question, project idea, or simply want to say hello? Send
              me a message.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <button type="submit" className="primary-btn">
              Submit Message
            </button>

            <p className="form-message" role="status">
              {formMessage}
            </p>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Nick Ulangca · Student Portfolio</p>
      </footer>
    </>
  );
}

export default App;
