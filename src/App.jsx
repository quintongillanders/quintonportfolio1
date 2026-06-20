import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";

import SchoolHive from "./pages/SchoolHive";
import WormGameCaseStudy from "./pages/Worm Catching Game";
import AiChatBotCaseStudy from "./pages/aichatbot";
import NotFound from "./pages/NotFound";

import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Home() {

  const featuredProjects = [
    {
      title: "SchoolHIVE Marketplace Launches at Otara Music and Arts Centre (November 2025)",
      description:
        "The SchoolHIVE Marketplace officially launches at the Otara Music and Arts Centre in November 2025.",
      image: "/rnz schoolhive.png",
      link: "https://www.rnz.co.nz/news/ldr/578864/otara-rangatahi-lead-digital-solution-to-school-costs"
    },
    {
      title: "Team QAK 404 Capstone Project Wins 1st Place at Unitec Whānau Day Showcase (November 2025)",
      description:
        "Team QAK404, developers of the SchoolHIVE Marketplace, win first place at the Unitec Whānau Day Showcase on November 20th, 2025.",
      image: "/whanaudaywin.jpg",
    },
    {
      title: "Gillanders Brothers Graduate from Unitec!",
      description:
        "Quinton Gillanders and Alex Gillanders graduate from Unitec on April 1st, 2026.",
      image: "/graduation.png",
      link: "#",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  // ---------------- CHAT STATE ----------------
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm Quinton's chat Assistant. Ask me anything about Quinton's work, or education"
    }
  ]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // ---------------- HARD CODED KNOWLEDGE BASE ----------------
  const knowledgeBase = {
  schoolhive: {
    keywords: [
      "schoolhive",
      "school hive",
      "marketplace",
      "rnz",
      "capstone"
    ],
    response: [
      "SchoolHIVE Marketplace NZ was Quinton Gillanders’ 2025 capstone project built using React, Firebase, and Material UI.",
      "The platform was designed to solve real-world issues around access to school uniforms and essential school resources in South Auckland communities.",
      "Quinton worked in a team of three (QAK404), and the project was successfully delivered, featured on RNZ, and won 1st place at the Unitec Whānau Day showcase."
    ]
  },

  skills: {
    keywords: ["skills", "react", "javascript", "firebase", "css", "html"],
    response: [
      "Quinton works primarily with React and JavaScript for frontend development.",
      "He also has experience with Firebase, Material UI, HTML, CSS, Python, Java, and C#.",
      "His main focus is building responsive, user-friendly web applications."
    ]
  },

  education: {
    keywords: ["education", "study", "unitec", "degree", "course", "school"],
    response: [
      "Quinton Gillanders completed a Bachelor of Computing Systems at Unitec in 2025.",
      "During his studies, he focused heavily on software development, particularly frontend web development using React and JavaScript.",
      "He also completed a final-year capstone project (SchoolHIVE Marketplace NZ), where he worked in a team to build a real-world production web application."
    ]
  },

  projects: {
    keywords: ["what has he built", "built", "portfolio"],
    response: [
      "Quinton has built several projects including the SchoolHIVE Marketplace capstone project, the Worm Catching Game, and a developing Hazard ID system.",
      "His work mainly focuses on interactive web applications."
    ]
  },

  wormgame: {
    keywords: [
      "worm",
      "worm game",
      "catching game",
      "worm catching game",
      "javascript game"
    ],
    response: [
      "The Worm Catching Game was a 2024 web development project built by Quinton using HTML, CSS, and JavaScript.",
      "It was designed as an interactive browser-based game where players catch moving worms to score points within a time limit.",
      "The project included keyboard controls, sound effects, a timer system, and a full game-over screen."
    ]
  },

   hazardid: {
    keywords: ["hazard", "hazard id", "hazardid", "safety tool"],
    response: [
      "Hazard ID is a project Quinton is currently working on.",
      "It is a hazard identification and tracking tool designed to improve safety reporting and risk management workflows.",
      "The project is still in development and will be released soon."
    ]
  }, 

  socialmedia: {
    keywords: ["social", "instagram", "facebook", "discord", "github", "linkedin", "mobile"],
    response: [
      "If you would like to get in touch with Quinton, you can use the links at the top of the page.",
      "The links include Quinton's email, Github, LinkedIn, and mobile number.",
      "Additionally, you can also conect with him on Facebook, Instagram, or Discord.",
      "Discord: settledown191",
      "Facebook: https://www.facebook.com/quinton.gillanders", 
      "Instagram: https://www.instagram.com/quintongillanders/", 
    ]
  }, 

  aichatbot: {
    keywords: ["ai", "aichat", "aichatbot", "bot", "chat"],
    response : [
      "The AI Chatbot is a project that Quinton wanted to work on to learn more about AI and to improve his skills.",
      "It is an ongoing project that he is continuing to work on in his free time.",
      "Currently the chatbot features real AI powered conversations, and conversation memory.", 
      "Upon refresh the AI will forget everything at the moment.",
      "The AI also features basic web knowledge using DuckDuckGo, for example, if you ask it about a certain game, tv show, movie or something else,",
      "it will retrieve that information from the internet, and provide the context to the language model.",
      "It is not 100% complete, as it makes alot of mistakes, but it is mostly accurate. Stay tuned for more updates!"
    ]
  }
};


const [typingMessage, setTypingMessage] = useState(null);

const typeMessage = (text, delay = 25) => {
  return new Promise((resolve) => {
    let i = 0;
    let current = "";

    const interval = setInterval(() => {
      current += text[i];
      i++;

      setTypingMessage(current);

      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, delay);
  });
};

  // ---------------- REPLACED SEND MESSAGE ----------------
  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = {
    sender: "user",
    text: input
  };

  setMessages((prev) => [...prev, userMessage]);

  const query = input.toLowerCase();
  setInput("");

  let matchedResponse = null;

  for (const key in knowledgeBase) {
    const entry = knowledgeBase[key];

    if (entry.keywords.some((kw) => query.includes(kw))) {
      matchedResponse = entry.response;
      break;
    }
  }

  const finalText =
    matchedResponse?.join("\n\n") ||
    "I don't have info on that yet — try asking about SchoolHIVE, skills, or projects!";

  // typing animation
  setTypingMessage("");


  setMessages((prev) => [
    ...prev,
    { sender: "bot", text: finalText }
  ]);

  setTypingMessage(null);
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject(
        (prev) => (prev + 1) % featuredProjects.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);

  return (
    <div className="app">

      {/* HERO */}
      <section className="hero-split">

        <div className="hero-left">

          <img
            src="/me.png"
            alt="Quinton Gillanders"
            className="hero-avatar"
          />

          <h1 className="hero-name">Quinton Gillanders</h1>

          <p className="hero-text">
            I'm a software developer with a Bachelor of Computing
            Systems from Unitec (2025). Recently completed a capstone
            project developing the SchoolHIVE Marketplace NZ platform as
            part of a collaborative team. Experienced in building
            responsive user interfaces using React.js, CSS and MUI.
          </p>

          <a
            href="/Quinton Gillanders CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View My CV
          </a>

        </div>

        <div className="hero-right">

          <div className="featured-box">

            <div className="featured-image-wrapper">
              {featuredProjects.map((project, index) => (
                <img
                  key={index}
                  src={project.image}
                  alt={project.title}
                  className={`featured-image ${
                    index === currentProject ? "active" : ""
                  }`}
                />
              ))}
            </div>

            <div className="featured-content">

              <h2>{featuredProjects[currentProject].title}</h2>

              <p>{featuredProjects[currentProject].description}</p>

              <div className="carousel-controls">

                <button
                  className="carousel-arrow"
                  onClick={() =>
                    setCurrentProject(
                      (currentProject - 1 + featuredProjects.length) %
                        featuredProjects.length
                    )
                  }
                >
                  <ChevronLeftIcon />
                </button>

                <div className="carousel-dots">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${
                        index === currentProject ? "active" : ""
                      }`}
                      onClick={() => setCurrentProject(index)}
                    />
                  ))}
                </div>

                <button
                  className="carousel-arrow"
                  onClick={() =>
                    setCurrentProject(
                      (currentProject + 1) %
                        featuredProjects.length
                    )
                  }
                >
                  <ChevronRightIcon />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">

        <h2>Skills</h2>

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
            <img src="/firebase.png" alt="Firebase" />
            <span>Firebase</span>
          </div>

          <div className="tech-item">
            <img src="/mui.png" alt="Material UI" />
            <span>Material UI</span>
          </div>

          <div className="tech-item">
            <img src="/HTML.png" alt="HTML" />
            <span>HTML</span>
          </div>

          <div className="tech-item">
            <img src="/css.png" alt="CSS" />
            <span>CSS</span>
          </div>

          <div className="tech-item">
            <img src="/python.png" alt="Python" />
            <span>Python</span>
          </div>

          <div className="tech-item">
            <img src="/java.png" alt="Java" />
            <span>Java</span>
          </div>

          <div className="tech-item">
            <img src="/csharp.png" alt="C#" />
            <span>C#</span>
          </div>

        </div>

      </section>


     {/* PROJECTS */}
<section id="projects" className="projects">

  <h2>Projects</h2>

  <div className="project-grid">

    <div className="card">

      <div className="card-image">
        <img src="/6420 web dev assignment.png" alt="Web Game Project" />
      </div>

      <div className="card-content">

        <h3>Worm Catching Game (2024)</h3>

        <p>
          A browser-based game built using JavaScript, HTML and CSS as part of a web development assignment for my Bachelor of Computing Systems at Unitec.
        </p>

        <div className="project-buttons">

          <a
            href="https://quintongillanders.github.io/wormcatchinggame.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Play Game
          </a>

          <a href="/wormcatchinggame" className="project-link secondary">
            Learn More
          </a>

        </div>

      </div>

    </div>

    <div className="card">

      <div className="card-image">
        <img src="/schoolhive.png" alt="SchoolHive project" />
      </div>

      <div className="card-content">

        <h3>SchoolHive Marketplace (2025)</h3>

        <p>
          Built as part of my Unitec Capstone Project using React, Firebase, Material UI and JavaScript.
          Developed alongside two students and featured on the Unitec website and RNZ.
        </p>

        <div className="project-buttons">

          <a
            href="https://www.schoolhive.co.nz/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Website
          </a>

          <a href="/schoolhive" className="project-link secondary">
            Learn More
          </a>

        </div>

      </div>

    </div>

    <div className="card">

      <div className="card-image">
        <img src="/hazardid.png.avif" alt="Hazard ID project" />
      </div>

      <div className="card-content">

        <h3>Hazard ID (2026)</h3>

        <p>
          A hazard identification and tracking tool built to help streamline safety reporting and risk management workflows. Coming soon!
        </p>

        <div className="project-buttons">

          <a
            href="#"
            className="project-link"
            onClick={(e) => e.preventDefault()}
          >
            More details coming soon
          </a>

        </div>

      </div>

    </div>

    <div className="card">

      <div className="card-image">
        <img src="/aichat1.png" alt="Aichatbot project" />
      </div>

      <div className="card-content">

        <h3>AI Chatbot (2026)</h3>

        <p>
          A friendly AI chatbot that I have started working on and will continue to work on over time.
        </p>

        <div className="project-buttons">

          <a
            href="https://aichatbot-lilac-two.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Chatbot
          </a>

          <a href="/aichatbot" className="project-link secondary">
            Learn More
          </a>

        </div>

      </div>

    </div>



  </div>

</section>

      {/* CHATBOT (NOW HARD CODED) */}
      <section id="chatbot" className="chatbot">

        <h2>Get to know me!</h2>
        <p>
          If you would just like a quick summary of what I do and what I've worked on, try asking below!
        </p>

        <div className="chatbot-box">

          <div className="chat-messages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}

            <div ref={messagesEndRef}></div>

          </div>

          <div className="chat-input-area">

            <input
              className="chat-input"
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button className="chat-send" onClick={sendMessage}>
              Send
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schoolhive" element={<SchoolHive />} />
        <Route path="/wormcatchinggame" element={<WormGameCaseStudy />} />
        <Route path="/aichatbot" element={<AiChatBotCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;