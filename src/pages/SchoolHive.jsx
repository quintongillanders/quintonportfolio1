import { Link } from "react-router-dom";

export default function SchoolHive() {
  return (
    <div className="case-study">


      <div className="back-button-container">
      <Link to="/" className="back-button">
        ← Back to homepage
      </Link>
    </div>

      {/* HERO */}
      <div className="case-hero">

        <h1>SchoolHive Marketplace NZ</h1>

        <div className="case-meta">
          <span>🎓 Capstone Project</span>
          <span>⚛️ React + Firebase</span>
          <span>📅 2025</span>
        </div>

        <p className="case-intro">
          A marketplace platform built as part of my Unitec
          Bachelor of Computing Systems Capstone Project (2025).
        </p>

        <div className="case-hero-image">
          <img src="/schoolhive.png" alt="SchoolHive dashboard" />
        </div>

      </div>

      {/* OVERVIEW */}
      <h2>Overview</h2>

      <p>
        In July 2025, industry sponsors presented multiple capstone project ideas
        to our class at Unitec. One of these was SchoolHIVE Marketplace NZ, presented by
        Swanie Nelson from Community Builders Trust New Zealand (CBNZ).
      </p>

      <div className="case-image">
        <img src="/schoolhive1.jpg" alt="SchoolHive project pitch" />
      </div>

      <p>
        The goal was to solve a real-world issue: many families struggle with the
        high cost of school uniforms and school-related items. The idea was to
        create a centralised marketplace where students and families could buy
        and sell second-hand items in a trusted environment.
      </p>

      <div className="case-image">
        <img src="/schoolhive2.jpg" alt="SchoolHive marketplace concept" />
      </div>

      <p>
        I worked in a team of three after selecting this project during the
        initial project pitch phase. We also had to select a project supervisor, and we chose of of our lecturers, Dr. Lei Song.
      </p>

      <div className="case-image">
        <img src="/schoolhive3.jpg" alt="SchoolHive team collaboration" />
      </div>

      {/* TEAM QAK404 */}
      <h2>Team QAK404</h2>
      <p>
        We had to decide on a team name and we went with QAK404.

    <div className="case-image">
        <img src="/schoolhive 5.png" alt="SchoolHive team collaboration" />
      </div>

      <p>QAK404 stands for each initial in our name, Quinton, Arishay, and Krijesh.

        </p>

        <div className="case-image">
        <img src="/schoolhive9.jpg" alt="SchoolHive team collaboration" />
      </div>

      <p>
      We also liked the 404 part because it’s a common error code in web development, and we thought it was a fun nod to our focus on building a web application.</p>
      </p>

      <div className="case-image">
        <img src="/schoolhive5.png" alt="SchoolHive team collaboration" />
      </div>


      {/* PROBLEM */}
      <h2>Problem</h2>

      <div className="case-card">
        <p>
          Students in South Auckland, particularly those from low-socioeconomic communities, face significant barriers in accessing essential school resources such as uniforms, stationery, and tutoring.</p>


           <p>These challenges impact not only their academic performance but also their confidence, attendance, and sense of belonging at school. </p>


           <p>Many families already experiencing financial hardship are unable to consistently provide these necessities, and schools often lack the capacity to fully bridge the gap. </p>

           <p>
            As a result, students are often left relying on informal channels or struggling without adequate support, which further widens educational inequality and limits their opportunities to succeed.
        </p>
      </div>

    

      {/* SOLUTION */}
      <h2>Solution</h2>

      <div className="case-card">
        <p>
          We built a structured web-based marketplace that allows users to:
        </p>
        <ul>
          <li>Create secure accounts</li>
          <li>Post and manage listings</li>
          <li>Browse available items</li>
          <li>Interact through a clean, simple UI</li>

           <div className="case-image">
            <img src="/schoolhive login.png" alt="SchoolHive team collaboration" />
          </div>

      <div className="case-image">
        <img src="/createlisting.png" alt="SchoolHive team collaboration" />
      </div>

      <div className="case-image">
        <img src="/schoolhive6.jpg" alt="SchoolHive team collaboration" />
      </div>

        </ul>
        


      </div>

      {/* TECH STACK */}
        <h2>Tech Stack</h2>

        <div className="tech-stack">
          <div className="tech-item">
            <img src="/react.png" alt="React" />
            <span>React</span>
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
            <img src="/javascript.png" alt="JavaScript" />
            <span>JavaScript</span>
          </div>

          <div className="tech-item">
            <img src="/css.png" alt="CSS" />
            <span>CSS</span>
            
            
          </div>
        </div>
        

      {/* ROLE */}
      <h2>My Role</h2>

      <div className="case-card">
        <p>
          We all played a part in every part of this project. A lot of my work was focused on frontend development, including:
        </p>
        <ul>
          <li>Designing responsive layouts</li>
          <li>Implementing authentication flows</li>
          <li>Mobile responsiveness</li>
          <li>Creating an admin panel that allows for content management</li>
        </ul>
      </div>

      {/* OUTCOME */}
      <h2>Outcome</h2>

      <div className="case-card">

        <div className="case-stats">
          <div className="stat">
            <h4>3</h4>
            <p>Team Members</p>
          </div>

          <div className="stat">
            <h4>18</h4>
            <p>Weeks</p>
          </div>

          <div className="stat">
            <h4>November 2025</h4>
            <p>Delivered</p>
          </div>
        </div>

        <p>
          The project was successfully completed and launched at the Otara Music and Arts Centre on November 11, 2025.
          It was featured on RNZ, and shared on the Unitec website and social media pages.
        </p>

        <div className="case-outcome-images">
          <img src="/rnz schoolhive.png" alt="SchoolHive launch showcase" />
          <img src="/schoolhive facebook.png" alt="SchoolHive team presentation" />
        </div>

      </div>

      <h2>Whānau Day Showcase</h2>

      <p>At the end of the semester, on November 20, 2025, Unitec School of Computing hosted it's Whānau day showcase, in which all the computing students showcased their projects.</p>

      <p>With enough votes from students, friends and families, team QAK404, our team, and the SchoolHIVE project, won 1st place!</p>

      <div className="case-image">
        <img src="/whanaudaywin.jpg" alt="SchoolHive team collaboration" />
      </div>


      {/* LINKS */}
      <h2>Links</h2>

      <a
        href="https://www.schoolhive.co.nz/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-button"
      >
        Click here to see SchoolHive Marketplace NZ live site
      </a>

      {/* Special Thanks */}
      <h2>Special Thanks</h2>

      <p>
        Special thank you to my project team members, Arishay Reddy, Krijesh Karki, Dr. Lei Song for supervising our project, and Swanie Nelson from CBNZ for being our project sponsor.
        Also a huge thank you to Masoud Shakiba and Andrew David for being the Capstone Project course Co-ordinators.</p>
        

    </div>
  );
}