import "../projects.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
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
  }, []);; 
  return (
    <div className="page">
      <header>
      </header>

      <div className="page_content">


        <div className="gallery2">

          {/* FIRST COLUMN (2 PROJECTS) */}
          <div className="collum">
            <div className="card-right">
                            <img className="animate2" src="white_oaks.png" alt="Wellington Apartments" />
                            <div className="holding2">
                                      <Link to="/" className="tohome"  onClick={() => window.scrollTo(0, 0)}>
                <FontAwesomeIcon icon={faHouse} />Home →
        </Link>

                            

              <span>

                                <h2>South London Towers</h2>
                <h4>LONDON, ON</h4>
                

              </span>
              </div>
            </div>
                        <div className="middle-image">
              <img src="highelite_wide.png" alt="middle" />
            </div>


            <div className="card-left">
              <img className="animate2" src="forest.jpg" alt="forest edge" />
              <span>
                <h2>Forest Edge</h2>
                <h4>london, on</h4>


              </span>
            </div>

                        <div className="middle-image">
              <img src="forest_wide.webp" alt="middle" />
            </div>

          </div>

          {/* SECOND COLUMN (3 PROJECTS) */}
          <div className="collumn">
                        <div className="card-left">
              <img className="animate2"  src={`${import.meta.env.BASE_URL}/Projects/meadowilly.png`} alt="Meadowlily" />
              <span>
                <h2>Meadowlily</h2>
                <h4>LONDON, ON</h4>

              </span>
            </div>

            <div className="card-right">
              <img className="animate2" src="southtowers.webp" alt="south towers" />
              <span>
                <h2>Southern Towers</h2>
                <h4>LONDON, ON</h4>

              </span>
            </div>
            <div className="middle-image">
              <img src="sou_res.webp" alt="middle" />
            </div>
            <div className="card-left">
              <img className="animate2" src="aura2.webp" alt="Meadowlily" />
              <span>
                <h2>Aura Living</h2>
                <h4>Chatham, ON</h4>

              </span>
            </div>
            <div className="middle-image">
              <img  src={`${import.meta.env.BASE_URL}aurawide.webp`} alt="middle" />
            </div>
          </div>

          {/* THIRD COLUMN (2 PROJECTS + middle image) */}
          <div className="collum">
            <div className="card-right">
              <img className="animate2" src="top image.webp" alt="Highland Elite towers" />
              <span>
                <h2>Wellington <br />
Apartments</h2>
                <h4>LONDON, ON</h4>
 
              </span>
            </div>



            <div className="card-left">
              <img className="animate2" src="lon_west.webp" alt="London West
Tower" />
              <span>
                <h2>London West <br />
Tower</h2>
                <h4>LONDON, ON</h4>

              </span>
            </div>
                        <div className="middle-image">
              <img src="lon_west.webp" alt="middle" />
            </div>
          </div>

          {/* FOURTH COLUMN (2 PROJECTS) */}
          <div className="collumn">
            <div className="card-right">
              <img  className="animate2" src={`${import.meta.env.BASE_URL}/Projects/church_cru.png`} alt="Huron Church CRU Units" />
              <span>
                <h2>Huron Church CRU <br /> Units</h2>
                <h4>Windsor, ON</h4>

              </span>
            </div>
            <div className="middle-image">
              <img src="cru_wide.webp" alt="middle" />
            </div>

            <div className="card-left">
              <img className="animate2" src="gains.webp" alt="Hyland Office Building and CRUs" />
              <span>
                <h2>Gainsborough <br />
Tower</h2>
                <h4>london, ON</h4>
              </span>
            </div>
                        <div className="card-right">
              <img className="animate2" src="York-Towers.webp" alt="Huron Church CRU Units" />
              <span>
                <h2>Downtown Skyline</h2>
                <h4>london, ON</h4>

              </span>
            </div>
          </div>

        </div>


      </div>
            <footer className="projects-footer">
        <div className="galleryyy">
          <div className="home_button_row">
            <Link to="/" className="tohome"  onClick={() => window.scrollTo(0, 0)}>
              <FontAwesomeIcon icon={faHouse} />Home →
            </Link>

          </div>
          <img src="logo2.png" alt="Civil Engineering" />
          <hr />
      
          <div className="roooow">
            <div className="location">
              <h2>location</h2>
              <ul>
              <li><FontAwesomeIcon icon={faLocationPin} />
      2C-1701 Richmond Street, London, Ontario. <br /></li>
              <li><FontAwesomeIcon icon={faLocationPin} />
      675 Cochrane Drive East Tower 6th Floor,<br /></li>
              <li>Markham ON <br /></li>
              <li>Tel: +1 (519) 878-5488 <br />
              </li>
              <li><a href="mailto:cs@creativestr.ca">
      cs@creativestr.ca
      </a></li>
              </ul>
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
                  <img src={`${import.meta.env.BASE_URL}/linkedin.png`} alt="LinkedIn" />
                </a>
      
                <a
                  href="https://www.instagram.com/iedesignltd"
                  className="insta"
                >
                  <img src={`${import.meta.env.BASE_URL}/insta.png`} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
