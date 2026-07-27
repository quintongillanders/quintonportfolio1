import { Link } from "react-router-dom";

export default function NZI() {
  return (
    <div className="case-study">

      {/* =========================
          Back Button
      ========================== */}

      <div className="back-button-container">
        <Link to="/" className="back-button">
          ← Back to homepage
        </Link>
      </div>

      {/* =========================
          Hero
      ========================== */}

      <div className="case-hero">

        <h1>New Zealand Insulators</h1>

        <div className="case-meta">
          <span>🏭 Manufacturing</span>
          <span>📦 Warehouse</span>
          <span>📅 2017 - 2023</span>
        </div>

        <p className="case-intro">
          Before pursuing software development full-time, I spent nearly six
          years working at New Zealand Insulators, where I developed a strong
          work ethic, attention to detail, and experience working in a
          fast-paced manufacturing environment.
        </p>

        <img
          src="/nzi-1.jpg"
          alt="Quinton and Raza"
          className="case-image"
        />

        <p>
          The photo above shows me in 2017 with my co worker Raza, who left in
          July 2017. I had just turned 18 years old at the time of this picture.
        </p>

      </div>

    

      {/* =========================
          My Time at NZI
      ========================== */}

      <section>

        <h2>My Time at New Zealand Insulators</h2>

        <p>
         Throughout my time at New Zealand Insulators (May 2017 to February 2023), I was responsible for assembling the various components that made up electrical insulators. These insulators are used on power lines to support and separate the electrical conductors while keeping them safely insulated from the poles and crossarms.
        </p>

        <p>
         In 2018, I would eventually go on to get my forklift license. This meant I could drive the forklift around the warehouse, and start to stack the pallets on the shelves, and get items down for dispatch.
        </p>

      </section>

      <img
        src="/nzi-2.jpg"
        alt="Placeholder"
        className="case-image"
      />

      <p>
        In the photo above, you can see me in July 2018, and having just turned 19 the month before. You can also see my co-worker, Andrew Laufiso, who took over from Raza in July 2017.
      </p>

      {/* =========================
          Photo Gallery
      ========================== */}

      <section>

        <h2>Photo Gallery</h2>

        <img
          src="/nzi-3.jpg"
          alt="Placeholder"
          className="case-image"
        />

        <p>
          This photo above shows the 2017 Christmas function down in Temuka in the South Island of New Zealand.
        </p>

        <img
          src="/nzi.jpg"
          alt="Placeholder"
          className="case-image"
        />

        <p>
          This photo above shows the Kumeu NZI Crew sometime in the middle of 2019. With me on the forklift, then left to right are Andrew Laufiso, David Glackin (Sales Manager), and Chris Van Der Werff (General Manager).
        </p>

      </section>

      {/* =========================
          Looking Ahead
      ========================== */}

      <section>

        <h2>Looking Ahead</h2>

        <p>
          In September 2022, I decided it was time for a change. So I looked into studying at Unitec. and in Feburary 2023, I started the New Zealand Diploma in Information systems
          which would lead to the Bachelor of Computing systems in 2024-2025. 
        </p>

        <p>
          I was very grateful for this job, as it taught me alot. It really prepared me for what was ahead in the following years.
        </p>

        <img
          src="/nzi-4.jpg"
          alt="Placeholder"
          className="case-image"
        />

        <p>The photo above shows the crew sometime in 2021 during the pandemic with out masks on. From left to right: David Glackin, Andrew Laufiso, Myself, and Chris Van Der Werff.</p>


      </section>


      <section>


        <h2>Special Thanks</h2>

        <p>
          Thank you to the NZI Kumeu Crew: Andrew Laufiso, David Glackin and Chris Van Der Werff for their support over the years that I worked at New Zealand Insulators.
        </p>
      </section>

    </div>
  );
}