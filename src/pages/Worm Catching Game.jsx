import { Link } from "react-router-dom";

export default function WormGameCaseStudy() {
  return (
    <div className="case-study">

      {/* BACK BUTTON */}
      <div className="back-button-container">
        <Link to="/" className="back-button">
          ← Back to homepage
        </Link>
      </div>

      {/* HERO */}
      <div className="case-hero">
        <h1>Worm Catching Game (2024)</h1>

        <div className="case-meta">
          <span>🎮 Web Game</span>
          <span>⚛️ JavaScript</span>
          <span>📅 2024</span>
        </div>

        <p className="case-intro">
          A browser-based game built as part of a web development assignment
          during my Bachelor of Computing Systems at Unitec.
        </p>
      </div>

        {/* TECH STACK */}
            <h2>Tech Stack</h2>

            <div className="tech-stack">

               <div className="tech-item">
                <img src="/HTML.png" alt="HTML" />
                <span>HTML</span>
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

      {/* THE ASSIGNMENT */}
      <h2>The Assignment</h2>

      <div className="case-card">
        <p>
          During the Bachelor of Computing Systems, I took a class called "Internet and Website Development" (ISCG6420).
          This was my first web development class that I had during my time at Unitec. </p>

          <p>We had two assignments during the semester, and the second one was a group assignment.
          One student had to develop a booking system, the other had to develop a web game. </p>

          <p>Unfortunatley, the student who I was teamed up with, dropped out of the course. So I had to complete the assignment on my own.
          I decided to go with the web game assignment, as I was originally interested in game development.</p>

          <p> Thankfully, I was still able to pass the whole assignment with full marks.
        </p>
      </div>

      {/* THE GAME */}
      <h2>The Game</h2>
      <div className="case-card">
        <p>
          The second part of this assignment involved designing and developing an interactive web based game using HTML, CSS and Javascript.</p>

          <p>The game was inspired by a beach setting where worms would move around the screen, and the goal was to catch as many as possible within the time limit</p>
          
          <p>
            The game had music, sound effects, and a game over screen.
        </p>
    </div>

    {/* GAME CONCEPT */}
    <h2>Game Concept</h2>
    <div className="case-card">
      <p>
        Each worm that was successfully caught would increase the players score by one point.
      </p>

      <p>
        The player controls the character using the keyboard. WASD keys are used for movement in all directions.
        The character is restricted to stay inside the boundaries of the canvas to ensure gameplay remains inside the visible area,
        while the spacebar key was used to perform the catch action.
      </p>

      <p>
        The game would then react to each key being pressed. W would move the character forwards, A left, D right, and S down. 
        When you catch a worm, the game will play a sound effect indicating that you caught the worm,  and increase your score. The worm would also dissapear from the screen.
        If you miss a worm, the game will play a sound effect indicating that you missed, but your score will not decrease.

      </p>
    </div>
    </div>
  );
}