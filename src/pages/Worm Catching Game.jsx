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

      <div className="case-image">
        <img src="/wormgame1.png" alt="wormgamecase1" />
      </div>

      <p>
        The player controls the character using the keyboard. WASD keys are used for movement in all directions.
        The character is restricted to stay inside the boundaries of the canvas to ensure gameplay remains inside the visible area,
        while the spacebar key was used to perform the catch action.
      </p>

      <p>
        The game would then react to each key being pressed. W would move the character forwards, A left, D right, and S down. 
        When you catch a worm, the game will play a sound effect indicating that you caught the worm,  and increase your score. The worm would also disappear from the screen.
        If you miss a worm, the game will play a sound effect indicating that you missed, but your score will not decrease.
      </p>
    </div>

    {/* Worm Behaviour and Lifecycle */}
    <h2>Worm Behaviour and Lifecycle</h2>
    <div className="case-card">
      <p>
        Each worm follows a structured lifecycle system to make gameplay more dynamic.
      </p>

      <h3>Stage 1: The Worm Appears</h3>
      
      <p>
        A small sand coloured semi circle appears at random on the canvas. This acts as the worm.
        The worm begins moving around the canvas.
      </p>

      <h3>Stage 2: Size Change and Colour Cycle</h3>
      <p>
        The semi circle will start to grow, once it has reached it's maximum size, it will begin to shrink again.
      </p>
      
      <p>
        Once it has shrunken to it's smallest size, it will disappear and respawn randomly on the canvas.
        This will then repeat. Worm will grow again, shrink, disappear and respawn.
      </p>
    </div>

    <p>
      Please check out a short clip of some gameplay showcasing scoring, moving and missing a worm below!
    </p>

    <div className="case-video">
        <video controls>
          <source src="/wormgamewasd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          </div>

    {/* User Experience and Design */}
    <h2>User Experience and Design</h2>
    <p>
      The game was designed with simplicity in mind. Mostly targeting younger users as specified in the assignment instructions.
    </p>

    <p>
      Visual feedback and sound effetcs were essential to make the game more engaging and more responsive, alongside music that felt very much like summertime at the beach.
    </p>

    <p>
      You also have the option to set the game time between 1 and 5 minutes, and once the time ran out, a message would be displayed with your score, and the site would reload
      so you could play again.
    </p>

    {/* Full Gameplay Video */}
    <h2>Full Gameplay Video</h2>
    <div classname="case-card">
      <p>Below is a video showcasing every feature of the game</p>
      <ul>
        Setting the time
      </ul>
      <ul>
        Playing a full round for 1 minute
      </ul>
      <ul>
        Showcasing all sound effects and music
      </ul>
      <ul>
        Game over message
      </ul>
      <ul>
        Page reloading after a game has ended
      </ul>

    <div className="case-video">
        <video controls>
          <source src="/wormgamedemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          </div>

    </div>

    {/* OUTCOME */}
      <h2>Outcome</h2>

      <div className="case-card">

        <div className="case-stats">
          <div className="stat">
            <h4>1</h4>
            <p>Team Member</p>
          </div>

          <div className="stat">
            <h4>1</h4>
            <p>Month</p>
          </div>

          <div className="stat">
            <h4>June 5, 2024</h4>
            <p>Delivered and Presented to the class</p>
          </div>
        </div>

    <p>
    We were given 1 month to complete the assignment.
    Honestly, this was probably my favorite assignment I did during my time at Unitec. Just being able to learn how to create a simple game like this
    really interested me, considering that I love to play games in my free time whenever I can. I plan to make some more personal projects like this in the future, 
    and hope to expand my skills to create something even bigger with everything that I learnt during this assignment.
    </p>
    </div>

    {/* Special Thanks */}
      <h2>Special Thanks</h2>

      <p>
        Special thank you to Jesse Schollit for teaching the ISCG6420 Internet and Website Development course in the Bachelor of Computing Systems programme at Unitec.</p>
    </div>
  );
}