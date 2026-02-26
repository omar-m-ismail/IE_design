import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [data, setData] = useState(null);
  const miniRef = useRef(null);



  // ✅ run AFTER data is loaded
 useEffect(() => {
  const miniElement = miniRef.current;
  if (!miniElement) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          miniElement.classList.add("visible");
          observer.unobserve(miniElement);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(miniElement);

  return () => observer.disconnect();
}, []); // ✅ empty dependency array




  return (
    <div className="home">
      <header>
        <div className="galleryy">
          <span>
            <img src="logo2.png" alt="Civil Engineering" />
            <hr />
            <div className="two_things">
              <div>
                <p>WE Design Smart Cities With CREATIVE STRUCTURES.</p>
                <p>
                  <strong>+103 Years </strong> of Combined  Architectural Experience
                </p>
              </div>

<Link
  to="/projects" className="gotoprojects" onClick={() => window.scrollTo(0, 0)}>
  SEE SAMPLE PROJECTS →
</Link>

            </div>
          </span>
          <h1 className="creative">CREATIVE</h1>
        </div>
        <h2 className="structure">STRUCTURES</h2>
      </header>

      <main className="home-content">
        <div className="vid">
          <div className="video-wrapper">
            <video autoPlay muted loop playsInline>
              <source src="top_vid.MP4" type="video/mp4" />
            </video>

            <div className="video-overlay">
              <h1>WHERE IDEAS RISE AND DESIGN BECOMES STRUCTURE</h1>

            </div>
          </div>
        </div>

        <div className="about_uss">
          <span className="title">
            <h2>OUR </h2>
            <h2>VISION</h2>
          </span>

          <span className="yap">
            <span>
              <p>
                We believe in the synthesis of disciplines, bringing together
                architects, engineers, designers, planners, and researchers to
                work collaboratively as one team.
              </p>

              <p>
                Through a collaborative design approach, we combine diverse
                insights to develop solutions that are economical, functional,
                innovative, and practical—always tailored to meet our clients’
                needs.
              </p>
            </span>
            <p>
              Our vision is realized through practice by cultivating strong
              relationships with universities—including Western, UBC, UNBC, and
              the University of Toronto—as well as colleges such as Fanshawe
              and George Brown, and research institutions including BLWTL and
              WINDEEE, ensuring continuous growth, research,  and providing state-of-the-art technology worldwide.
            </p>
          </span>
        </div>

        <div className="projects_slide">
          <div className="projects_content">
            <h3>
              <strong>Aura Living</strong>
            </h3>
            <p>
              Aura Living is a thoughtfully designed mixed-use development <br /> in
              Chatham, Ontario, combining residential living with <br /> commercial
              space to enrich the surrounding urban fabric.
            </p>
          </div>
        </div>

        <div className="blueprint">
          <img src="blueprint.png" alt="" />

          <div className="two_pics">
            <div className="pic">
              <img src="bend.jpg" alt="" />
              <p>
                The project is conceived as a mid-rise masonry building,
                featuring hollow-core slab floor systems and cast-in-place
                concrete footings to ensure long-term durability and structural
                efficiency.
              </p>
            </div>
            <div className="pic">
              <img src="back.jpg" alt="" />
              <p>
                With an estimated construction value of $42 million, Aura Living
                reflects a careful balance of functionality and architectural
                clarity, supporting vibrant street-level activity while providing
                comfortable residential spaces above.
              </p>
            </div>
          </div>
        </div>

        <div className="gallery">

  <div className="mini" ref={miniRef}>

    <figure>
      <img src="highland_elite.png" alt="Highland Elite Towers" />
      <div>
        <h2>Highland Elite Towers</h2>
        <h5>London, ON</h5>

      </div>
    </figure>

    <figure>
      <img src="sou_res.png" alt="South Residential Towers" />
      <div>
        <h2>South Residential Towers</h2>
        <h5>Windsor, ON</h5>

      </div>
    </figure>

    <figure>
      <img src="gain_card.png" alt="Gainsborough Towers" />
      <div>
        <h2>Gainsborough
          <br />
Towers</h2>
        <h5>kitchener, ON</h5>
      </div>
    </figure>

    <figure>
      <img src="meadowilly.png" alt="Meadowlily Subdivision" />
      <div>
        <h2>Meadowlily Subdivision</h2>
        <h5>vaughan, ON</h5>
      </div>
    </figure>

    <figure>
      <img src="huron.png" alt="Huron Church" />
      <div>
        <h2>Huron Church</h2>
        <h5>coburg, ON</h5>
      </div>
    </figure>

    <figure>
      <img src="elp.webp" alt="East London Plaza" />
      <div>
        <h2>East London Plaza</h2>
        <h5>lucan, ON</h5>

      </div>
    </figure>



  </div>



          <Link to="/projects" className="toprojects"  onClick={() => window.scrollTo(0, 0)}>
            <h2>discover MORE about our PROJECTS →</h2>
          </Link>
        </div>
        <div className="work_with_us">
          <span>
          <h1 className="wwu">
work </h1>
          <h1 className="wwu">with us
          </h1>
          </span>
          <div className="wwu_text">
          <h5>
we Design the future
          </h5>
          <p>
          At Creative Structures, we help ideas take
shape through thoughtful design and purposeful
execution. Start building your story with us.
          </p>
          <Link to="/EngineeringTeam"   onClick={() => window.scrollTo(0, 0)}>
          <span className="lm_button">
          learn more
          </span>
          </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
