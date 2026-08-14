import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useLayoutEffect, useRef } from "react";

import Navbar from "./components/Navbar";

import SchoolHive from "./pages/SchoolHive";
import WormGameCaseStudy from "./pages/Worm Catching Game";
import AiChatBotCaseStudy from "./pages/aichatbot";
import SuccessTutoring from "./pages/SuccessTutoring";
import DanubeOrchards from "./pages/DanubeOrchards";
import NewZealandInsulators from "./pages/NZI";
import NotFound from "./pages/NotFound";

import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import DynamicBackground from "./components/DynamicBackground";

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
      title: "Team QAK404 Capstone Project Wins 1st place at Unitec Whānau Day Showcase (November 2025)",
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
{
    title: "Work experience at Success Tutoring New Lynn (July 2026)",
    description:
      "Once a week for 2 weeks, Quinton Gillanders had an oppurtunity to be an AI Lab Tutor to young students, introducing them to AI, and some fun activities.",
    image: "/success-tutoring.jpg",
    link: "/success-tutoring",
  }, 
];
  

  const [currentProject, setCurrentProject] = useState(0);

  // ---------------- CHAT STATE ----------------
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm Quinton's chat Assistant. Ask me anything about Quinton's projects, work history or education"
    }
  ]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // ---------------- HARD CODED KNOWLEDGE BASE ----------------
  const knowledgeBase = {
  greetings: {
    keywords: [
      "hi",
      "hello",
      "hey",
      "hiya",
      "kia ora",
      "yo",
      "sup",
      "good morning",
      "good afternoon",
      "good evening"
    ],
    response: [
      "Hello! I'm Quinton's AI Assistant.",
      "I'm here to answer questions about Quinton's projects, skills, education, and experience.",
      "Feel free to ask me about SchoolHIVE, Hazard ID, AI chatbot, QuinX Learn, TutorOS, the Worm Catching Game, Quinton's education, skills, or social media."
    ]
  },

  schoolhive: {
    keywords: [
      "schoolhive",
      "school hive",
      "marketplace",
      "rnz",
      "capstone"
    ],
    response: [
      "SchoolHIVE Marketplace NZ was Quinton Gillanders' 2025 capstone project built using React, Firebase, and Material UI.",
      "The platform was designed to solve real-world issues around access to school uniforms and essential school resources in South Auckland communities.",
      "Quinton worked in a team of three (QAK404), and the project was successfully delivered, featured on RNZ, and won 1st place at the Unitec Whānau Day Showcase."
    ]
  },

  skills: {
    keywords: [
      "skills",
      "skill",
      "react",
      "javascript",
      "firebase",
      "html",
      "css",
      "python",
      "java",
      "c#",
      "material ui",
      "mui"
    ],
    response: [
      "Quinton primarily develops web applications using React and JavaScript.",
      "He also has experience with Firebase, Material UI, HTML, CSS, Python, Java and C#.",
      "His main focus is building responsive, user-friendly web applications."
    ]
  },

  education: {
    keywords: [
      "education",
      "study",
      "studied",
      "degree",
      "course",
      "unitec",
      "university"
    ],
    response: [
      "Quinton completed a Bachelor of Computing Systems at Unitec in 2025.",
      "During his studies he specialised in software development with a strong focus on React and JavaScript.",
      "His final-year capstone project was the SchoolHIVE Marketplace NZ platform."
    ]
  },

  projects: {
    keywords: [
      "projects",
      "project",
      "portfolio",
      "built",
      "what has he built",
      "work"
    ],
    response: [
      "Quinton has built or is developing several projects including SchoolHIVE Marketplace NZ, the Worm Catching Game, Hazard ID, an AI chatbot, QuinX Learn and TutorOS.",
      "His work mainly focuses on interactive web applications built with React, including upcoming AI-powered education tools."
    ]
  },

  wormgame: {
    keywords: [
      "worm",
      "worm game",
      "worm catching game",
      "catching game",
      "javascript game"
    ],
    response: [
      "The Worm Catching Game was built in 2024 using HTML, CSS and JavaScript.",
      "Players catch moving worms before the timer runs out.",
      "The project includes keyboard controls, sound effects, a timer and a game over screen."
    ]
  },

  hazardid: {
    keywords: [
      "hazard",
      "hazard id",
      "hazardid",
      "safety",
      "safety tool"
    ],
    response: [
      "Hazard ID is a project Quinton is currently developing.",
      "It is a hazard identification and tracking system designed to improve workplace safety reporting and risk management.",
      "The project is still under development, and may not release until 2027 or 2028."
    ]
  },

  quinxlearn: {
    keywords: [
      "quinx learn",
      "quinx",
      "ai education tool",
      "education tool",
      "learning tool"
    ],
    response: [
      "QuinX Learn is an upcoming AI education tool being developed by Quinton.",
      "The project is currently in development and more details will be shared in the future."
    ]
  },

  tutoros: {
    keywords: [
      "tutoros",
      "tutor os",
      "tutor operating system",
      "tutoring project"
    ],
    response: [
      "TutorOS is another upcoming project being developed by Quinton.",
      "It is currently in development, with more information and a release date to be announced in the near future."
    ]
  },

  socialmedia: {
    keywords: [
      "social",
      "social media",
      "contact",
      "github",
      "linkedin",
      "facebook",
      "instagram",
      "discord",
      "email",
      "mobile"
    ],
    response: [
      "You can find Quinton's contact links at the top of the portfolio website.",
      "These include his email address, GitHub, LinkedIn and mobile number.",
      "Discord: settledown191",
      "Facebook: https://www.facebook.com/quinton.gillanders",
      "Instagram: https://www.instagram.com/quintongillanders/",
      "Please message him first saying that you came from his portfolio, otherwise he may not accept your request. Hope you understand!"
    ]
  },

  danube: {
  keywords: [
    "danube",
    "danube orchards",
    "orchard",
    "strawberries",
    "strawberry",
    "family business",
    "rakich",
    "arthur",
    "lorraine",
    "whenuapai",
    "grandfather",
    "grandad",
    "grandparents",
    "pack house",
    "packing shed",
    "family orchard"
  ],
  response: [
    "Danube Orchards was Quinton Gillanders' family's multi-generational strawberry business.",
    "The orchard grew strawberries for 94 years, with the Whenuapai orchard operating for 52 years after being established by his grandfather Arthur Rakich in 1974.",
    "Quinton worked in the packing shed from 2014 until the final strawberry season ended in February 2026, checking punnets before they were sealed and prepared for supermarkets such as New World and Pak'nSave.",
    "The orchard was an important part of Quinton's childhood and family life, hosting birthdays, Christmas celebrations, weddings and many family gatherings.",
    "In 2026 the property was sold to Auckland Transport for a future Park and Ride, marking the end of nearly a century of strawberry growing."
  ]
},

      successtutoring: {
        keywords: [
          "success tutoring",
          "success tutoring new lynn",
          "tutoring",
          "tutor",
          "ai lab",
          "ai tutor",
          "new lynn",
          "primary school",
          "teacher",
          "teaching",
          "workshops",
          "students"
        ],
        response: [
          "In July 2026, Quinton worked with Success Tutoring New Lynn as an AI Lab Tutor.",
          "He delivered two weekly AI workshops for young students, introducing them to Artificial Intelligence through fun, interactive activities and demonstrations.",
          "The workshops focused on helping students understand what AI is, how it can be used creatively, and the importance of using AI responsibly.",
          "Quinton hopes to continue working with Success Tutoring and expand the AI Lab programme in the future."
        ]
      },

        nzi: {
          keywords: [
            "new zealand insulators",
            "nzi",
            "insulators",
            "manufacturing",
            "warehouse",
            "forklift",
            "factory",
            "power lines",
            "electrical insulators",
            "kumeu"
          ],
          response: [
            "Quinton worked at New Zealand Insulators from May 2017 to February 2023 before beginning his software development journey.",
            "His role involved assembling electrical insulators used on power lines to safely support and separate electrical conductors.",
            "In 2018, he earned his forklift licence and took on additional warehouse responsibilities, including stacking pallets and preparing products for dispatch.",
            "Working at NZI helped him develop a strong work ethic, attention to detail, teamwork, and experience in a fast-paced manufacturing environment.",
            "In 2022, Quinton decided to pursue a career in software development and left NZI in February 2023 to begin studying at Unitec."
          ]
        },

  aichatbot: {
    keywords: [
      "ai",
      "chatbot",
      "chat bot",
      "ai chatbot",
      "bot"
    ],
    response: [
      "AI chatbot is Quinton's personal chatbot project.",
      "The project was created to learn more about AI and modern web technologies.",
      "It currently supports AI conversations, conversation memory and basic web search.",
      "It is still actively being improved with new features."
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
let bestMatchLength = 0;

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

for (const key in knowledgeBase) {
  const entry = knowledgeBase[key];

  for (const kw of entry.keywords) {
    // \b = word boundary, so "hi" won't match inside "schoolhive"
    const pattern = new RegExp(`\\b${escapeRegExp(kw)}\\b`, "i");

    if (pattern.test(query) && kw.length > bestMatchLength) {
      matchedResponse = entry.response;
      bestMatchLength = kw.length;
    }
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
      <section id="about" className="hero-split">

        <div className="hero-left">

          <img
            src="/me.png"
            alt="Quinton Gillanders"
            className="hero-avatar"
          />

          <h1 className="hero-name">Quinton Gillanders</h1>

          <p className="hero-text">
            I'm a Full Stack Software Developer with a Bachelor of Computing
            Systems from Unitec (2025). Completed a capstone
            project from July to November 2025 developing the SchoolHIVE Marketplace NZ platform as
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

      {/* WORK EXPERIENCE */}
        <section id="experience" className="experience">

          <h2>Work History</h2>

          <p>While I have experience in Software Development, I also have a strong background in various industries.</p>

          <div className="experience-grid">

            <div className="experience-card">

              <div className="experience-image">
                <img 
                  src="/danube.jpg" 
                  alt="Danube Orchards"
                />
              </div>

              <div className="experience-content">

                <h3>Danube Orchards (Family Business)</h3>

                <span>Seasonal Orchard Worker</span>

                <p>
                  Danube Orchards was my families multi-generation orchard located in Whenuapai, Auckland. 
                  Please take the time to read about this, as it was a very important part of my life,
                  as well as my families history.
                </p>

                <a href="/danube" className="project-link">
                  Learn More
                </a>

              </div>

            </div>


            <div className="experience-card">

              <div className="experience-image">
                <img 
                  src="/nzi.jpg" 
                  alt="New Zealand Insulators"
                />
              </div>

              <div className="experience-content">

                <h3>New Zealand Insulators</h3>

                <span>Warehouse Assistant</span>

                <p>
                  Worked at New Zealand Insulators from 2017 to 2023.
                  Developed experience in manufacturing processes, quality
                  control, teamwork and operating within an industrial
                  environment.
                </p>

                <a href="/nzi" className="project-link">
                  Learn More
                </a>

              </div>

            </div>


            <div className="experience-card">

              <div className="experience-image">
                <img 
                  src="/success-tutoring.jpg" 
                  alt="Success Tutoring New Lynn"
                />
              </div>

              <div className="experience-content">

                <h3>Success Tutoring New Lynn</h3>

                <span>AI Lab Tutor</span>

                <p>
                  I have only taught 2 classes so far in July 2026, and may be expanding to teaching twice a month.
                </p>

                <a href="/success-tutoring" className="project-link">
                  Learn More
                </a>

              </div>

            </div>


          </div>

        </section>


     {/* PROJECTS */}
<section id="projects" className="projects">

  <h2>Projects</h2>

  <p>Here are some of the projects I have worked on, including my capstone project, SchoolHIVE Marketplace NZ.</p>

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


    <div className="card">

  <div
    className="card-image card-image-coming-soon"
    role="img"
    aria-label="TutorOS coming soon"
  >
    <HourglassEmptyIcon className="coming-soon-icon" />
  </div>

  <div className="card-content">

    <h3>TutorOS (Date TBC)</h3>

    <p>
      More details on TutorOS will be shared in the coming months.
    </p>

    <div className="project-buttons">

      <a
        href="#"
        className="project-link"
        onClick={(e) => e.preventDefault()}
      >
        Coming Soon
      </a>

    </div>

  </div>

</div>

    <div className="card">

      <div
        className="card-image card-image-coming-soon"
        role="img"
        aria-label="QuinX Learn coming soon"
      >
        <HourglassEmptyIcon className="coming-soon-icon" />
      </div>

      <div className="card-content">

        <h3>QuinX Learn (Date TBC)</h3>

        <p>
          More details on QuinX Learn will be shared in the coming months.
        </p>

        <div className="project-buttons">

          <a
            href="#"
            className="project-link"
            onClick={(e) => e.preventDefault()}
          >
            Coming Soon
          </a>

        </div>

      </div>

    </div>

    <div className="card">

      <div
        className="card-image card-image-coming-soon"
        role="img"
        aria-label="Hazard ID coming soon"
      >
        <HourglassEmptyIcon className="coming-soon-icon" />
      </div>

      <div className="card-content">

        <h3>Hazard ID (Date TBC)</h3>

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
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark"
  );

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const toggleTheme = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (event.key.toLowerCase() === "t" && !isTyping) {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
      }
    };

    window.addEventListener("keydown", toggleTheme);
    return () => window.removeEventListener("keydown", toggleTheme);
  }, []);

  return (

    
    <>
      <DynamicBackground />
      <Navbar />
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        title="Press T to change theme"
      >
        <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
        {theme === "dark" ? "Light" : "Dark"}
        <kbd>T</kbd>
      </button>


        {/*  Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schoolhive" element={<SchoolHive />} />
        <Route path="/wormcatchinggame" element={<WormGameCaseStudy />} />
        <Route path="/aichatbot" element={<AiChatBotCaseStudy />} />
        <Route path="/success-tutoring" element={<SuccessTutoring />} />
        <Route path="/danube" element={<DanubeOrchards />} />
        <Route path="/nzi" element={<NewZealandInsulators />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
