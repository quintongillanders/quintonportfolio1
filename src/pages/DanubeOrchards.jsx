import { Link } from "react-router-dom";

import AgricultureIcon from "@mui/icons-material/Agriculture";
import GrassIcon from "@mui/icons-material/Grass";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function DanubeOrchards() {
  return (
    <div className="case-study">

      {/* =========================
          Back Button
      ========================== */}

      <div className="back-button-container">
        <Link to="/" className="back-button">
          Back to homepage
        </Link>
      </div>

      {/* =========================
          Hero
      ========================== */}

      <div className="case-hero">

        <h1>Danube Orchards</h1>

        <div className="case-meta">
          <span><AgricultureIcon /> Family Business</span>
          <span><GrassIcon /> Orchard</span>
          <span><LocationOnIcon /> Auckland</span>
        </div>

      </div>

        <p>
          Danube Orchards was my families multi generational family business on my mum's side of the family.
        </p>

        <img
          src="/danube front shop.JPEG"
          alt="Danube Orchards"
          className="case-image"
        />

   

      {/* =========================
          Working at Danube Orchards
      ========================== */}

      <section className="case-section">

        <h2>Working at Danube Orchards</h2>

        <p>
          While I was only working on and off at the Orchard since November 2014, my job was in the packing shed.
          This is where we packed the strawberries to be sent to supermarkets such as Pak'n Save and New World.
          I would be standing at the end of the conveyor belt, doing the quality control checks.
          They would then go into the heat sealing machine to be covered by our label and then into the green crates
          to be put on a pallet ready for supermarkets.
        </p>

        <div className="gallery-grid">

          <img
            src="/work1.jpg.JPEG"
            alt="Working at Danube Orchards"
            className="case-image"
          />

          <img
            src="/work2.JPEG"
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
          The orchard was run by my Grandfather Arthur and my late Nana Lorraine Rakich.
          At some point, my Uncle Anthony Rakich would take over from them and run the Orchard.
          I would work alongside my Mum (Yvonne Gillanders), my Brother (Alex Gillanders),
          my Cousin (George Rakich), my Grandfather (Arthur Rakich), and my Uncle (Anthony Rakich).
        </p>

        <img
          src="/danube.jpg"
          alt="Family at Danube Orchards"
          className="case-image"
        />

        <img
          src="/workers.JPEG"
          alt="Family at Danube Orchards"
          className="case-image"
        />

        <p>
          We also had a lot of staff working at the Orchard, some of which had been with us since the beginning.
        </p>

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
            src="/95th1.JPEG"
            alt="Memory 1"
            className="case-image"
          />

          <p>
            In the photo above, you can see from left to right, My Auntie Sonya, My Uncle Gary, My Grandad Arthur, My Mum Yvonne, My Dad Don, My Uncle Anthony and my Auntie Caroline.
            This was a photo from my Grandad's 95th Birthday, taken on April 11th, 2025.
          </p>

          <img
            src="/family95th.JPEG"
            alt="Memory 2"
            className="case-image"
          />

          <p>
            In the photo above, you can see my grandad in the middle surrounded by all of his grandchildren and their partners, and great grandchildren. Taken on April 11th 2025, his 95th birthday.
          </p>

          <img
            src="/Wedding.JPEG"
            alt="Memory 3"
            className="case-image"
          />

        <p>In the photo above, you can see our final get together at Danube Orchards, which was my cousin's wedding night on Febuary 28th, 2026. 
          We also had many Christmas functions and other events here.</p>
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
          src="/final.JPEG"
          alt="Danube Orchards Final Day"
          className="case-image"
        />

        <p>This final picture shows all the hydroponics that were growing the strawberries are no longer there. We took them down between March and April 2026.</p>

      </section>

      <section className="case-section">

        <h2>Thank you to everyone who has supported my family over the years</h2>
      </section>

    </div>
  );
}
