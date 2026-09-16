import { Link } from "react-router-dom";
import "./quinelo.css";

import BuildIcon from "@mui/icons-material/Build";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";

export default function Quinelo() {
  return (
    <div className="case-study quinelo-page">
      <div className="back-button-container">
        <Link to="/" className="back-button">
          Back to homepage
        </Link>
      </div>

      {/* HERO */}
      <div className="case-hero">
        <h1>quinelo</h1>

        <div className="case-meta">
          <span><SchoolIcon /> Education Tool</span>
          <span><BuildIcon /> Closed Beta</span>
          <span><CalendarMonthIcon /> 2026</span>
        </div>

        <p className="case-intro">
          "quinelo" is an education tool in development designed to help teachers
          save time when preparing quizzes.
        </p>

        <div className="case-hero-image">
          <img src="/quinelo.png" alt="quinelo project screenshot" />
        </div>
      </div>

      {/* OVERVIEW */}
      <h2>Overview</h2>

      <p>
        This is an upcoming project of mine. I had this idea in July 2026.
        The goal is to help teachers save time by generating quiz PDFs for their classrooms.
        More information on this site will be added the closer I get to releasing.
      </p>

      
      <div className="case-image">
        <img src="/quinelo1.png" alt="quinelo overview screenshot placeholder" />
      </div>

      <p>
        I had the idea for quinelo after seeing how much time teachers spend preparing quizzes for their students. 
        It can be a task that takes a long time, especially when they have to create multiple quizzes.
        I thought this would be a great opportunity for me to learn more about AI and how it can be used to help people.
      </p>

      {/* TECH STACK */}
      <h2>Tech Stack</h2>

      <div className="tech-stack">
        <div className="tech-item">
          <img src="/react.png" alt="React" />
          <span>React</span>
        </div>

        <div className="tech-item">
          <img src="/css.png" alt="CSS" />
          <span>CSS</span>
        </div>

        <div className="tech-item">
          <img src="/firebase.png" alt="Firebase" />
          <span>Firebase</span>
        </div>

        <div className="tech-item">
          <img src="/openai.svg" alt="OpenAI" className="quinelo-openai-logo" />
          <span>OpenAI</span>
        </div>
      </div>


      {/* EXAMPLE COPY: Edit these drafts to reflect your actual features, work, and plans. */}

      {/* PROBLEM */}
      <h2>Problem</h2>

      <div className="case-card">
        <p>
          Teachers can spend a lot of time preparing quizzes for their students.
          They have to come up with the questions, decide how difficult they
          should be, and put everything into a document for the class.
        </p>

        <p>
          This can take even longer when they need to make multiple quizzes.
          I thought this would be a good opportunity to see how AI could help
          with some of that work and make the process quicker.
        </p>
      </div>

      {/* SOLUTION */}
      <h2>Solution</h2>

      <div className="case-card">
        <p>
          The idea was to build a tool that helps teachers generate quizzes
          and download them as PDFs. I wanted to make something that would
          save them time when preparing resources for their students.
        </p>

        <ul>
          <li>AI-assisted quiz generation</li>
          <li>Quiz PDFs for classroom use</li>
        </ul>

        {/* Replace src with /quinelo-features.png once added to public. */}
        <div className="case-image">
          <img src="/quinelo2.png" alt="quinelo features screenshot placeholder" />
        </div>
      </div>

      {/* CREATING A QUIZ */}
      <h2>Creating a Quiz</h2>

      <p>
        The idea is for a teacher to start with the topic they want the quiz
        to cover, then use quinelo to generate the questions. From there,
        they can get a PDF to use with their class. 
      </p>

      {/* Replace src with /quinelo-quiz.png once added to public. */}
      <div className="case-image">
        <img src="/quinelo3.png" alt="Quiz creation screenshot placeholder" />
      </div>

      <p>
        The PDF brings the quiz together into a document that can be printed
        for students. I want this part to be straightforward so teachers
        do not have to spend extra time putting the quiz into a document
        themselves. They can also use the optional menu, with more options for them to make the pdf their own.
        This includes adding their own school logo, changing the format (Standard, Two Columns, and Compact),
        A choice to include an answer key, number of questions, and quiz type.
      </p>

      {/* Replace src with /quinelo-pdf.png once added to public. */}
      <div className="case-image">
        <img src="/quinelo4.png" alt="Generated quiz PDF screenshot placeholder" />
      </div>

      {/* ROLE */}
      <h2>My Role</h2>

      <div className="case-card">
        <p>
          This is a personal project of mine, so I am working on taking it
          from the original idea to a tool that teachers can use. It is also
          a chance for me to learn more about AI while building something
          related to education. 
        </p>

        <ul>
          <li>Developing the project from the original idea</li>
          <li>Working on the website design and how it is used</li>
          <li>Working with real beta testers from Success Tutoring New Lynn</li>
        </ul>
      </div>

      {/* DESIGN & DEVELOPMENT */}
      <h2>Design & Development</h2>

      <p>
        I am using React, CSS, Firebase, and OpenAI for this project.
        I want the website to be simple to follow so teachers can focus
        on creating their quiz. I am still working on the design and
        will add more screenshots as the project develops.
      </p>

      {/* Replace src with /quinelo-development.png once added to public. */}
      <div className="case-image">
        <img src="/quinelo5.png" alt="Development screenshot placeholder" />
      </div>

      {/* CHALLENGES */}
      <h2>Challenges & Lessons</h2>

      <div className="case-card">
        <p>
          One thing I want to focus on is the quality of the questions
          generated by AI. They need to make sense for the topic and be
          suitable for the students who will be answering them. This is
          something I want to keep checking as I work on the project.
        </p>

        <p>
          I thought this project would be a good way to learn more about
          using AI in a web application. There is also a lot to think about
          beyond generating questions, like how the quiz looks and how
          easy it is for a teacher to get the finished PDF.
        </p>
      </div>

      {/* OUTCOME */}
      <h2>Closed Beta & Next Steps</h2>

      <div className="case-card">
        <p>
          quinelo is currently in closed beta. I have not announced a public
          release date yet, as there is still more work to do before it
          is ready for a wider release.
        </p>

        <p>
          For now, I will continue working on the quiz creation process and
          improving the project. More information, screenshots, and updates
          will be added to this page the closer I get to releasing.
        </p>
      </div>

      {/* LINKS */}
      <h2>Links</h2>

      <a
        href="https://www.quinelo.co.nz"
        target="_blank"
        rel="noopener noreferrer"
        className="link-button"
      >
        Visit quinelo
      </a>
    </div>
  );
}
