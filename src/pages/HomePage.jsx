import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [data, setData] = useState(null);
  const toRef = useRef(null);



  // ✅ run AFTER data is loaded
 useEffect(() => {
  const elements = document.querySelectorAll(
    ".animate, .animate2, .animate3, .delay1, .delay2"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);; // ✅ empty dependency array




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
          <h1 className="creative animate">CREATIVE</h1>
        </div>
        <h2 className="structure animate">STRUCTURES</h2>
      </header>

      <main className="home-content">
        <div className="vid">
          <div className="video-wrapper">
            <video autoPlay muted loop playsInline>
              <source src="top_vid.MP4" type="video/mp4" />
            </video>

            <div className="video-overlay">
              <h1 className="animate3">WHERE IDEAS RISE AND DESIGN BECOMES STRUCTURE</h1>

            </div>
          </div>
        </div>

        <div className="about_uss">
          <span className="title animate">
            <h2>OUR </h2>
            <h2>VISION</h2>
          </span>

          <span className="yap">
            <span className="animate delay1">
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
            </span >
            <p className="animate delay2">
Our vision is realized through practice by cultivating strong relationships with  research institutions and universities including Western, UBC, UNBC, and the University of Toronto, as well as colleges such as Fanshawe and George Brown, and research institutions including BLWTL and WINDEEE, ensuring continuous growth, research, and providing state-of-the-art technology worldwide.
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
          <img src="blueprint.webp" alt="" />

          <div className="two_pics">
            <div className="pic">
              <img className="animate2" src="bend.webp" alt="" />
              <p>
                The project is conceived as a mid-rise masonry building,
                featuring hollow-core slab floor systems and cast-in-place
                concrete footings to ensure long-term durability and structural
                efficiency.
              </p>
            </div>
            <div className="pic">
              <img className="animate2 delay1" src="front.webp" alt="" />
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

  <div className="mini" >

    <figure className="animate">
      <img src="highland_elite.webp" alt="Highland Elite Towers" />
      <div>
        <h2>Highland Elite Towers</h2>
        <h5>London, ON</h5>

      </div>
    </figure>

    <figure className="animate delay1">
      <img src="sou_res.webp" alt="South Residential Towers" />
      <div>
        <h2>South Residential Towers</h2>
        <h5>Windsor, ON</h5>

      </div>
    </figure>

    <figure className="animate delay2">
      <img src="gain_card.webp" alt="Gainsborough Towers" />
      <div>
        <h2>Gainsborough
          <br />
Towers</h2>
        <h5>kitchener, ON</h5>
      </div>
    </figure>

    <figure className="animate delay3">
      <img src="meadowilly.webp" alt="Meadowlily Subdivision" />
      <div>
        <h2>Meadowlily Subdivision</h2>
        <h5>vaughan, ON</h5>
      </div>
    </figure>

    <figure className="animate delay4">
      <img src="huron.webp" alt="Huron Church" />
      <div>
        <h2>Huron Church</h2>
        <h5>coburg, ON</h5>
      </div>
    </figure>

    <figure className="animate delay5">
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
          <h5 className="animate2">
we Design the future
          </h5>
          <p className="animate2 delay1">
          At Creative Structures, we help ideas take
shape through thoughtful design and purposeful
execution. Start building your story with us.
          </p>
          <Link to="/EngineeringTeam"   onClick={() => window.scrollTo(0, 0)}>
          <span className="lm_button animate2 delay2">
          learn more
          </span>
          </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
