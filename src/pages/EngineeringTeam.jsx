import "../team.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function EngineeringTeam() {


  return (
    <div className="team_page">
            <header className="header">
        <br />
      </header>
      <div className="team_content">
  
        <div className="team_yap">
          <div className="img-storage">
        <img src="team_top3.webp" alt="" />
                                  <div className="img-overlay">
              <h5>london Office</h5>

            </div>

            </div>
        <div className="holding">
        <Link to="/" className="tohome2"  onClick={() => window.scrollTo(0, 0)}>
            <FontAwesomeIcon icon={faHouse} />Home →
        </Link>   
        <p className="p1">At Creative Structures, we believe in working together and
          <br />

praising the diverse strengths we each bring. 
<br />
<br />
Join us at Creative Structures and be part of a fulfilling and enriching <br />

experience where you'll be valued, supported, and inspired to reach <br />

your full potential.</p>
</div>
</div>
<div className="dark">
  <div className="row">
              <img src="logo2.png" alt="Civil Engineering" />
              <h1>Our job openings</h1>
            </div>
  <div className="group1">
    <img src="team_top.webp" alt="" />
    <div className="g1text">
      <h2>Architect (OAA) / Intern Architect </h2>
      <br />
      <br />
    <p>
      Location: London, Ontario <br />

Position Type: Full-time, Permanent <br />

Work Environment: Onsite <br />

Experience Level: 5+ years preferred (flexible based on potential)
    </p>
    <br />
              <h3>Skills/Qualifications</h3>
              <ul>
                <li>Licensed Architect (OAA) in good standing or Close to Licensed Architect </li>
                <li>5+ years of professional experience (flexible for candidates with strong leadership potential)</li>
                <li>Technical knowledge of CRUs, commercial, and industrial buildings</li>
                <li>Proficiency in REVIT, AutoCAD, and BIM modeling</li>
                <li>Strong understanding of Ontario Building Code and construction systems (wood, steel, concrete)</li>
                <li>A passion for innovation, mentorship, and continuous learning</li>

              </ul>
              <br />
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Be part of growing architectural team</li>
                <li>Manage commercial, residential (CRUs), and industrial design projects from concept to completion</li>
                <li>Develop architectural drawings and BIM models using REVIT and AutoCAD</li>
                <li>Conduct site investigations and perform inspections (vehicle required)</li>
                <li>Review shop drawings and ensure code compliance across all deliverables</li>
                <li>Coordinate with engineers, consultants, and clients throughout all phases</li>
                <li>Support integration of new technology and advanced design tools into workflow</li>
              </ul>
              <br />
              <h3> To Apply
                <br />

                Qualified applicants must submit their</h3>
                <ul>
                  <li>COVER LETTER,</li>
                  <li>RESUME AND</li>
                  <li>SAMPLE PROJECTS RELATED TO THE IE DESIGN LINE OF WORK</li>
                </ul>
                <h3>By email (pdf files only) to<a className="underline" href="mailto:cs@creativestr.ca">
cs@creativestr.ca
</a></h3>
    </div>
  </div>
    <div className="group2">
          <img src="team_top - Copy.webp" alt="" />
          <div className="g2text">
            <h2>Intermediate Architectural Drafter/Designer</h2>
            <br />
            <br />
          <p>
            Location: London, Ontario <br />

Position Type: Full-time, Permanent <br />

Work Environment: Onsite <br />

Experience Level: 1+ years preferred 
          </p>
          <br />
          <h3>Skills/Qualifications</h3>
          <ul>
            <li>Graduate of structural/architectural university and/or architectural technology program</li>
            <li>Proficient in drafting using REVIT is a must</li>
            <li>Minimum experience of 2–3 years in architectural drawings</li>
            <li>Strong REVIT experience in architectural and relevant site experience</li>
            <li>Excellent interpersonal skills and multitasking</li>
            <li>Attention to detail is a must</li>
            <li>Strong knowledge of concrete and steel buildings and high-rise building construction</li>
            <li>Willingness to learn state-of-the-art related technologies and work on professional and personal growth</li>
          </ul>


          <h3>Key Responsibilities</h3>
          <ul>
            <li>Develop BIM and REVIT Models for architectural Projects</li>
            <li>Prepare drawings, with high attention to detail, through preliminary systems layouts, coordination sets, permit <br />
            sets, and final working drawings</li>
            <li>Perform site visits and complete general reviews for projects under construction under the Supervision of <br />
            licensed Architect</li>
            <li>Review shop drawings and compile information for future projects</li>
          </ul>
                        <h3> To Apply
                <br />

                Qualified applicants must submit their</h3>
                <ul>
                  <li>COVER LETTER,</li>
                  <li>RESUME AND</li>
                  <li>SAMPLE PROJECTS RELATED TO THE IE DESIGN LINE OF WORK</li>
                </ul>
                <h3>By email (pdf files only) to<a className="underline" href="mailto:cs@creativestr.ca">
cs@creativestr.ca
</a></h3>
          </div>
    </div>
</div>


      </div>

    </div>
  );
}