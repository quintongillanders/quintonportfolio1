import "./App.css";

import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect, useLayoutEffect, useRef } from "react";

import Navbar from "./components/Navbar";

import SchoolHive from "./pages/SchoolHive";
import WormGameCaseStudy from "./pages/Worm Catching Game";
import SuccessTutoring from "./pages/SuccessTutoring";
import DanubeOrchards from "./pages/DanubeOrchards";
import NewZealandInsulators from "./pages/NZI";
import Quinelo from "./pages/quinelo";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";

import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PeopleIcon from "@mui/icons-material/People";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import DynamicBackground from "./components/DynamicBackground";

// Images go in public: public/gym.jpg is referenced here as /gym.jpg.
// Edit these cards or add more hobbies here.
const hobbies = [
  {
    title: "Gaming",
    chatResponse: "Quinton's a big Rockstar Games fan, but he plays plenty of other games too, including Forza Horizon and Crash Bandicoot.",
    keywords: ["gaming", "games", "video games", "rockstar", "rockstar games", "forza", "forza horizon", "crash bandicoot"],
    image: "/nikobellic.png",
    description: "I am a huge Rockstar Games fan, but I love all kinds of games outside of Rockstar Games aswell, including Forza Horizon, Crash Bandicoot, and many more.",
    Icon: SportsEsportsIcon,
  },
  {
    title: "Gym",
    chatResponse: "Quinton started going to the gym with a friend in 2024 and has kept it up since. He usually goes on weekday mornings.",
    keywords: ["gym", "fitness", "workout", "workouts", "working out"],
    image: "/gym.jpg",
    imagePosition: "center 20%",
    description: "Started going to the gym with my friend in 2024, and have been going consistently since then. Usually every weekday morning.",
    Icon: FitnessCenterIcon,
  },
  {
    title: "Going for Runs",
    chatResponse: "Running is a newer hobby for Quinton. He started in August 2026 and usually meets friends at Victoria Park in the city for a run.",
    keywords: ["running", "runs", "going for runs", "jogging", "victoria park"],
    image: "/run.jpg",
    description: "Only just recently started going for runs in August 2026. Usually meet up with some friends at Victoria Park in the city.",
    Icon: DirectionsRunIcon,
  },
  {
    title: "Shows",
    chatResponse: "Quinton enjoys finding a new series to get into or rewatching an old favourite.",
    keywords: ["shows", "tv", "television", "series"],
    image: "/squidgame.png",
    description: "I love finding new shows to watch or rewatching old favourites.",
    Icon: LiveTvIcon,
  },
  {
    title: "Family & Friends",
    chatResponse: "Quinton loves spending time with family and friends. He says he's not always the best at reaching out, but he tries to catch up when he can.",
    keywords: ["family", "friends", "family and friends", "family & friends", "spending time with family"],
    image: "/friendsfamily.jpg.JPEG",
    description: "I love to spend time with my friends and family. Although I am not the best at reaching out to people, I try to reach out when I can.",
    Icon: PeopleIcon,
  },
];

function Home() {
  const [missingHobbyImages, setMissingHobbyImages] = useState({});

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
      text: "Hey! I can tell you a bit about Quinton—what he's built, where he's worked, or what he enjoys outside coding. What would you like to know?"
    }
  ]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // ---------------- HARD CODED KNOWLEDGE BASE ----------------
  const knowledgeBase = {
  hobbies: {
    keywords: ["hobbies", "hobby", "interests", "free time", "spare time", "outside of coding", "for fun"],
    response: [
      "Outside coding, Quinton's usually gaming, at the gym, out for a run, or watching a show. He also loves spending time with family and friends. He's a big Rockstar Games fan, and running is a more recent hobby."
    ]
  },
  // Keep conversational hobby answers alongside the editable cards above.
  ...Object.fromEntries(hobbies.map((hobby) => [
    `hobby-${hobby.title}`,
    {
      keywords: hobby.keywords,
      response: [hobby.chatResponse || `Here's how Quinton describes it: “${hobby.description}”`]
    }
  ])),
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
      "Hey! What would you like to know about Quinton? You could ask about his projects, his background, or what he does for fun."
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
      "SchoolHIVE was Quinton's 2025 capstone project at Unitec. He built it with two teammates using React, Firebase, and Material UI to help South Auckland families access school uniforms and essentials.",
      "The team, QAK404, won first place at the Unitec Whānau Day Showcase, and the project was featured on RNZ."
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
      "Quinton mostly builds web apps with React and JavaScript. He's also worked with Firebase, Material UI, HTML, CSS, Python, Java, and C#. His focus is making apps that are easy to use and work well across different screens."
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
      "Quinton finished his Bachelor of Computing Systems at Unitec in 2025, focusing on software development. That's where he worked on SchoolHIVE as his final-year capstone project."
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
      "Quinton has worked on SchoolHIVE Marketplace NZ and the Worm Catching Game. His education tool quinelo is currently in closed beta, and he's also developing TutorOS and Hazard ID.",
      "Most of his work is built around interactive web apps. Which project would you like to hear about?"
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
      "It's a browser game Quinton built in 2024 with HTML, CSS, and JavaScript. You try to catch moving worms before the timer runs out, with keyboard controls and sound effects along the way."
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
      "Hazard ID is a tool Quinton is developing to help people identify and track workplace hazards. It's still in development and may not be out until 2027 or 2028."
]
  },

  quinelo: {
    keywords: [
      "quinelo",
      "quinelo website",
      "quinelo release date",
      "quinelo closed beta",
      "ai education tool",
      "education tool",
      "learning tool",
      "quiz pdfs",
      "quiz preparation"
    ],
    response: [
      "quinelo is an education tool Quinton is building to help teachers spend less time preparing quizzes. It generates ready-to-use quiz PDFs for the classroom.",
      "It's currently in closed beta, and a public release date hasn't been announced yet. Find out more at https://www.quinelo.co.nz."
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
      "TutorOS is another project Quinton has in development. There aren't many details to share yet, and a release date hasn't been announced."
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
      "Danube Orchards was Quinton's family's strawberry business, so it was a big part of both his working life and his childhood. He worked in the packing shed from 2014 until the final season ended in February 2026, checking strawberry punnets before they went out to supermarkets.",
      "His grandfather Arthur Rakich established the Whenuapai orchard in 1974. The family grew strawberries for 94 years altogether, and the orchard hosted plenty of birthdays, weddings, and Christmases. The property was sold to Auckland Transport in 2026 for a future Park and Ride."
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
      "In July 2026, Quinton spent two weeks helping young students explore AI at Success Tutoring New Lynn, with one workshop each week. The sessions used fun activities and demos to cover what AI is, how to use it creatively, and how to use it responsibly. He hopes to do more with the programme in future."
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
      "Before studying software development, Quinton worked at New Zealand Insulators from May 2017 to February 2023, assembling electrical insulators for power lines. He got his forklift licence in 2018 and also helped with warehouse work and dispatch.",
      "He decided to change careers in 2022 and left the following February to start at Unitec."
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
      "Quinton's standalone AI chatbot project has been discontinued and removed from the portfolio. You can still ask me about his other projects, work, and hobbies here."
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
    "I'm not sure about that one. Could you rephrase it or name the topic you're interested in? I know about Quinton's projects, work, studies, and hobbies.";

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

          <Link
            to="/cv"
            className="project-link"
          >
            View My CV
          </Link>

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
        <img src="/quinelo.png" alt="quinelo project" />
      </div>

      <div className="card-content">

        <h3>quinelo (2026, Closed Beta)</h3>

        <p>
          An education tool designed to help teachers save time by generating
          ready-to-use quiz PDFs. Currently in closed beta, with the release date to be announced.
        </p>

        <div className="project-buttons">

          <a
            href="https://www.quinelo.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Website
          </a>

          <a
            href="/quinelo"
            className="project-link secondary"
          >
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

      {/* HOBBIES */}
      <section id="hobbies" className="hobbies" aria-labelledby="hobbies-heading">
        <h2 id="hobbies-heading">Hobbies</h2>
        <p className="hobbies-intro">A few things I enjoy outside of coding.</p>

        <div className="project-grid">
          {hobbies.map(({ title, description, image, imagePosition, Icon }) => (
            <article className="card" key={title}>
              <div className={`card-image${missingHobbyImages[image] ? " card-image-coming-soon" : ""}`}>
                {missingHobbyImages[image] ? (
                  <Icon className="coming-soon-icon" aria-hidden="true" />
                ) : (
                  <img
                    src={image}
                    alt={title}
                    style={{ objectPosition: imagePosition }}
                    loading="lazy"
                    onError={() => setMissingHobbyImages((current) => ({ ...current, [image]: true }))}
                  />
                )}
              </div>
              <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
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
        {theme === "dark" ? "Light" : "Dark"}
        <kbd>T</kbd>
      </button>


        {/*  Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schoolhive" element={<SchoolHive />} />
        <Route path="/wormcatchinggame" element={<WormGameCaseStudy />} />
        <Route path="/success-tutoring" element={<SuccessTutoring />} />
        <Route path="/danube" element={<DanubeOrchards />} />
        <Route path="/nzi" element={<NewZealandInsulators />} />
        <Route path="/quinelo" element={<Quinelo />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
