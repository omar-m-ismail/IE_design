import "../projects.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";


export default function Projects() {
  const [projects, setProjects] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/api/projects")
    .then(res => res.json())
    .then(data => {
      console.log("Projects data:", data);
      setProjects(data);
    })
    .catch(err => console.log(err));
}, []);
function chunkArray(arr) {
  const chunks = [];
  let i = 0;
  let chunkIndex = 0;

  while (i < arr.length) {
    const size = chunkIndex === 1 ? 3 : 2;
    chunks.push(arr.slice(i, i + size));
    i += size;
    chunkIndex++;
  }

  return chunks;
}
  const projectChunks = chunkArray(projects, 3);


  // -------------------- JSX --------------------
return (
  <div className="page">
    <header>
          <br />            
    </header>
  <div className="page-content">
<Link to="/" className="tohome">
Home →
</Link>


<div className="gallery">
  {/* FIRST GROUP */}
  <div className="collum">
    {projectChunks[0]?.map((project, idx) => (
      <div
        key={project.id}
        className={idx === 1 ? "card-right" : "card-left"}
      >
        <img src={project.image} alt={project.title} />
        <span>
          <h2>{project.title}</h2>
                    <h4>{project.location}</h4>
{project.budget && <h3> Estimated Budget: {project.budget}</h3>}
{project.status && <h3> status: {project.status}</h3>}
          <p>{project.description}</p>
{project.scope && (
  <p classname='scope' style={{ whiteSpace: "pre-line" }}>
    <strong>Scope:</strong>{" "}
    {project.scope}
  </p>
)}




        </span>
      </div>
    ))}
  </div>

  {/* SECOND GROUP */}
  <div className="collumn">
    {projectChunks[1]?.map((project, idx) => (
      <div
        key={project.id}
        className={idx === 1 ?  "card-right":"card-left" }
      >
        <img src={project.image} alt={project.title} />
        <span>
          <h2>{project.title}</h2>
          <h4>{project.location}</h4>
{project.budget && <h3> Estimated Budget: {project.budget}</h3>}
{project.status && <h3> status: {project.status}</h3>}
                    
          <p>{project.description}</p>


        </span>
      </div>
    ))}
  </div>
<div className="colum">
  {projectChunks[2]?.map((project, idx) => (
    <div key={idx}>

      {/* Project 1 */}
      {idx === 0 && (
        <div className="card-right">
          <img src={project.image} alt={project.title} />
          <span>
            <h2>{project.title}</h2>
            <h4>{project.location}</h4>
            {project.budget && <h3> Estimated Budget: {project.budget}</h3>}
            {project.status && <h3> status: {project.status}</h3>}
            <p>{project.description}</p>
          </span>
        </div>
      )}

      {/* Middle Image BETWEEN project 1 and project 2 */}
      {idx === 0 && (
        <div className="middle-image">
          <img src="highelite_wide.png" alt="middle" />
        </div>
      )}

      {/* Project 2 */}
      {idx === 1 && (
        <div className="card-left">
          <img src={project.image} alt={project.title} />
          <span>
            <h2>{project.title}</h2>
            <h4>{project.location}</h4>
            {project.budget && <h3> Estimated Budget: {project.budget}</h3>}
            {project.status && <h3> status: {project.status}</h3>}
            <p>{project.description}</p>
          </span>
        </div>
      )}

    </div>
  ))}
</div>

<div className="collumn">
    {projectChunks[3]?.map((project, idx) => (
      <div
        key={project.id}
        className={idx === 1 ? "card-left" : "card-right"}
      >
        <img src={project.image} alt={project.title} />
        <span>
          <h2>{project.title}</h2>
                    <h4>{project.location}</h4>
{project.budget && <h3> Estimated Budget: {project.budget}</h3>}
{project.status && <h3> status: {project.status}</h3>}
          <p>{project.description}</p>


        </span>
      </div>
    ))}
  </div>
</div>
<div className="westdell">
<img  src="westdell.png" alt="" />
</div>
</div>
      <footer className="projects-footer">
  <div className="galleryyy">
    <img src="logo2.png" alt="Civil Engineering" />
    <hr />

    <div className="roooow">
      <div>
        <h2>location</h2>
        <p><FontAwesomeIcon icon={faLocationPin} />
2C-1701 Richmond Street, London, Ontario.</p>
        <p><FontAwesomeIcon icon={faLocationPin} />
675 Cochrane Drive East Tower 6th Floor,</p>
        <p>Markham ON</p>
        <p>Tel: +1 (519) 878-5488</p>
        <p>cs@creativestr.ca</p>
      </div>

      <div className="hours">
        <h2 id="cntct">Business Hours</h2>
        <ul>
          <li>Monday: 8am – 5pm</li>
          <li>Tuesday: 8am – 5pm</li>
          <li>Wednesday: 8am – 5pm</li>
          <li>Thursday: 8am – 5pm</li>
          <li>Friday: 8am – 5pm</li>
        </ul>
      </div>

      <div className="social">
        <h2>get social</h2>

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
            <img src="/insta.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

        
      
    </div>
  
);
}