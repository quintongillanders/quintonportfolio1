import { Link } from "react-router-dom";

export default function ProjectName() {
  return (
    <div className="case-study">

      <div className="back-button-container">
        <Link to="/" className="back-button">
          ← Back to homepage
        </Link>
      </div>

      {/* HERO */}
      <div className="case-hero">

        <h1>QuinC AI</h1>

        <div className="case-meta">
          <span>🏷️ Personal Project</span>
          <span>🛠️ React + Groq API</span>
          <span>📅 June 2026 - Present</span>
        </div>

        <p className="case-intro">
          This is a personal project that I started in late June 2026 to expand my knowledge about AI.
        </p>

        <div className="case-hero-image">
          <img src="/aichat1.png" alt="Project Hero" />
        </div>

        <p>
          I wanted to create this project that would challenge me and allow me
          to learn new technologies outside of what I learnt during my time at
          Unitec. I felt like it was the perfect time to do it since the job
          market had been pretty rough, giving me the opportunity to continue
          learning while searching for graduate roles.
        </p>

      </div>

      {/* OVERVIEW */}
      <h2>Overview</h2>

      <p>
        Built using React and the Groq API (not to be confused with Grok from
        xAI), the chatbot can hold natural conversations with users using
        Meta's Llama language model.
      </p>

      <p>
        The chatbot integrates the DuckDuckGo Instant Answer API as a lightweight fallback knowledge source, 
        allowing it to quickly retrieve concise factual information such as definitions, summaries, and general web data. 
        This helps complement the language model by providing up-to-date, search-based responses when needed, 
        without relying on heavier or tracking-based search engines, keeping the system fast, simple, and privacy-conscious.
      </p>

      <p>
        This project is still in active development and continues to evolve as
        I experiment with new AI capabilities, improve the user interface, and
        explore AI integration into modern web applications.
      </p>

      <div className="case-image">
        <img src="/aichatbot2.png" alt="Overview" />
      </div>

      {/* TECH STACK */}
      <h2>Tech Stack</h2>

      <div className="tech-stack">

        <div className="tech-item">
          <img src="/react.png" alt="React" />
          <span>React</span>
        </div>

        <div className="tech-item">
          <img src="/javascript.png" alt="JavaScript" />
          <span>JavaScript</span>
        </div>

        <div className="tech-item">
          <img src="/css.png" alt="CSS" />
          <span>CSS</span>
        </div>

        <div className="tech-item">
          <img src="/groq.png" alt="Groq API" />
          <span>Groq API</span>
        </div>

        <div className="tech-item">
          <img src="/llama.png" alt="Meta Llama" />
          <span>Llama</span>
        </div>

      </div>

      {/* FEATURES */}
      <h2>Current Features</h2>

      <div className="case-card">
            <p>🤖 Conversational AI powered by Meta's Llama language model</p>
            <p>⚡ Fast AI responses using the Groq API</p>
            <p>🌐 Basic internet knowledge using the DuckDuckGo Instant Answer API</p>
            <p>💬 Modern chat interface built with React</p>
            <p>📱 Responsive design for desktop and mobile devices</p>
            <p>🚀 Hosted online using Vercel</p>
            </div>

      {/* OUTCOME */}
      <h2>Outcome</h2>

      <div className="case-card">

        <div className="case-stats">

          <div className="stat">
            <h4>1</h4>
            <p>Developer</p>
          </div>

          <div className="stat">
            <h4>Ongoing</h4>
            <p>Development</p>
          </div>

          <div className="stat">
            <h4>2026</h4>
            <p>And beyond</p>
          </div>

        </div>

        <p>
          This project is still under active development and serves as an
          ongoing learning experience. This page will be updated as I build the project over time.
        </p>

        <p>
          Building this project has given me hands-on experience integrating AI
          APIs, working with large language models, and developing
          conversational user interfaces using React.
        </p>

        <p>
          As I continue to learn more about AI development, I plan to expand
          the chatbot with additional features and improved functionality over
          time.
        </p>

        <p>
            Please note that with the duck duck go web knowledge, the chatbot can make mistakes, so not everything it says will be accurate.
        </p>

      </div>

      {/* LINKS */}
      <h2>Links</h2>

      <a
        href="https://aichatbot-lilac-two.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-button"
      >
        View Live Project
      </a>

    </div>
  );
}

