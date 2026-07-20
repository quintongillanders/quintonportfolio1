import { Link } from "react-router-dom";

export default function DanubeOrchards() {
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

        <h1>Danube Orchards</h1>

        <div className="case-meta">
          <span>🍓 Family Business</span>
          <span>🌱 Orchard</span>
          <span>📍 Auckland</span>
        </div>

      </div>

      {/* =========================
          A Place Full of Memories
      ========================== */}

      <section className="case-section">

        <h2>A Place Full of Memories</h2>

        <p>
          Danube Orchards was my families multi generational family business.
          We were growing strawberries for 94 years, and only for 52 years we grew them in Whenuapai.
          My Dida (Grandfather in Croatian), Arthur Rakich, built the Orchard in 1974, where him and my Nana,
          Lorraine Rakich, would live until she passed on my 17th birthday in 2016.
          It is where my family would continue to grow strawberries until February 2026, when our final strawberry
          season ended.
        </p>

        <img
          src="/images/danube/memories.jpg"
          alt="Danube Orchards"
          className="case-image"
        />

      </section>

      {/* =========================
          Working at Danube Orchards
      ========================== */}

      <section className="case-section">

        <h2>Working at Danube Orchards</h2>

        <p>
          While I was only working on and off at the Orchard since November 2014, I was able to work in the packing shed.
          This is where we packed the strawberries to be sent to supermarkets such as Pak'n Save and New World.
          I would be standing at the end of the conveyor belt, checking the punnets that our staff would be packing,
          making sure there were no squashed or rotten strawberries.
          They would then go into the heat sealing machine to be covered by our label and then into the green crates
          to be put on a pallet ready for supermarkets.
        </p>

        <div className="gallery-grid">

          <img
            src="/images/danube/work1.jpg"
            alt="Working at Danube Orchards"
            className="case-image"
          />

          <img
            src="/images/danube/work2.jpg"
            alt="Working at Danube Orchards"
            className="case-image"
          />

        </div>

      </section>

      {/* =========================
          The People
      ========================== */}

      <section className="case-section">

        <h2>The People</h2>

        <p>
          The orchard was run by my Grandfather Arthur and my Nana Lorraine.
          At some point, my Uncle Anthony Rakich would take over from them and run the Orchard.
          I would work alongside my Mum (Yvonne Gillanders), my Brother (Alex Gillanders),
          my Cousin (George Rakich), my Grandfather (Arthur Rakich), and my Uncle (Anthony Rakich).
        </p>

        <img
          src="/images/danube/family.jpg"
          alt="Family at Danube Orchards"
          className="case-image"
        />

      </section>

      {/* =========================
          Some of My Favourite Memories
      ========================== */}

      <section className="case-section">

        <h2>Some of My Favourite Memories</h2>

        <p>
          It was not just a place of work, it was my grandparents' place where we would come to visit after school,
          or stay over. We had a lot of family gatherings, one example being my Grandad Arthur's 95th birthday in April 2025.
        </p>

        <div className="gallery-grid">

          <img
            src="/images/danube/memory1.jpg"
            alt="Memory 1"
            className="case-image"
          />

          <img
            src="/images/danube/memory2.jpg"
            alt="Memory 2"
            className="case-image"
          />

          <img
            src="/images/danube/memory3.jpg"
            alt="Memory 3"
            className="case-image"
          />

        </div>

      </section>

      {/* =========================
          The End of an Era
      ========================== */}

      <section className="case-section">

        <h2>The End of an Era</h2>

        <p>
          As of June 2026, Danube Orchards has been bought by Auckland Transport to be built into a Park and Ride.
          Our final day of growing strawberries was on February 8th, 2026.
        </p>

        <img
          src="/images/danube/final.jpg"
          alt="Danube Orchards Final Day"
          className="case-image"
        />

      </section>

    </div>
  );
}