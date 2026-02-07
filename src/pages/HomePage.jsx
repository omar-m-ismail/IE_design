import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/home")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="home">
<header>
                <div className="galleryy">
          <span>
          <img src="logo2.png" alt="Civil Engineering" />
                    <hr/>
                    <div className="two_things">
                      <div>
          <p>WE Design Smart Cities With CREATIVE STRUCTURES.</p>
          <p><strong>54 Years </strong> of Architectural Experience</p>
          </div>

                    <Link to="/projects" className="gotoprojects">
  SEE MORE PROJECTS →
</Link>

                    </div>
          </span>
          <h1 className="creative">CREATIVE</h1>
        </div>
        <h2 className="structure">STUCTURES</h2>

</header>
      <main className="home-content">

        <div className="vid">


<video autoPlay muted loop playsInline controls>
    <source src="top_vid.MP4" type="video/mp4"></source>
</video>
        </div>
        <div className="about_uss">
          <span className="title"><h2>OUR </h2>

<h2>VISION</h2></span>

<span className="yap"><span><p>We believe in the synthesis of disciplines, bringing together
architects, engineers, designers, planners, and researchers to
work collaboratively as one team. </p>

<p>Through a collaborative design approach, we combine diverse
insights to develop solutions that are economical, functional,
innovative, and practical—always tailored to meet our clients’
needs.</p></span>
<p>Our vision is realized through practice by cultivating strong relationships with universities—including Western, UBC, UNBC, and the University of Toronto—as well as colleges such as Fanshawe and George Brown, and research institutions including BLWTL and WINDEEE, ensuring continuous growth, research, and innovation.</p></span>
          
        </div>
        <div className="projects_slide">

          
          <div className="projects_content">
            <h3><strong>Aura Living</strong></h3>
            <p>

Aura Living is a thoughtfully designed mixed-use development
in Chatham, Ontario, combining residential living with
commercial space to enrich the surrounding urban fabric.</p>
          </div>
        </div>
        <div className="blueprint">
          <img src="blueprint.jpg" alt="" />

          <div className="two_pics">
            <div className="pic">
             <img src="park.jpg" alt="" />
             <p>The project is conceived as a mid-rise masonry building, featuring
hollow-core slab floor systems and cast-in-place concrete footings to
ensure long-term durability and structural efficiency.

</p>
            </div>
            <div className="pic">
              <img src="front.jpg" alt="" />
              <p>With an estimated construction value of $42 million, Aura Living
reflects a careful balance of functionality and architectural clarity,
supporting vibrant street-level activity while providing comfortable
residential spaces above.</p>
            </div>
          </div>
        </div>


        <div className="gallery">
          <div className="mini">
            {data.projects.slice(0,6).map((project) => (
              <figure key={project.id}>
                <img src={project.image} alt={project.name} />
                <div>
                <h2>{project.name}</h2>
                <h6>{project.location}</h6>
                <h4>{project.description}</h4>
                </div>
              </figure>
            ))}
          </div>

        </div>


      </main>
      
      <footer className="home-footer">
        <div className="galleryyy">
                    <img  className="footer-logo" src="logo2.png" alt="Civil Engineering" />
                    <hr/>
                    <div className="roooow">
                      <div>
 <h2>location</h2>
  <p>{data.contact.address}</p>
  <p>Tel: {data.contact.phone}</p>
  <p>{data.contact.email}</p>


                      </div>
                      <div className="hours">
                                  <h2 id="cntct">Business Hours</h2>

<ul>
  {data?.schedule?.map((day) => (
    <li key={day.day}>
      {day.day}: {day.open} – {day.close}
    </li>
  ))}
</ul>

                      </div>
                                                <div className="social">
                                                  <h2>get social
                                                  </h2>
<div className="social_links">
  
          <a
  href="https://www.linkedin.com/company/iedesign/"
  className="linkedin"
>
  <img src="/linkedin.png" alt="LinkedIn" />
</a>
        <a
  href="https://www.instagram.com/iedesignltd"
  className="insta"
>
  <img src="/insta.png" alt="instagram" />
</a>
</div>

      </div>

                    </div>


        </div>



      </footer>
    </div>
  );
}
