import "../projects.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div className="page">
      <header>
      </header>

      <div className="page_content">


        <div className="gallery2">

          {/* FIRST COLUMN (2 PROJECTS) */}
          <div className="collum">
            <div className="card-right">
                            <img  src={`${import.meta.env.BASE_URL}/Projects/white_oaks.png`} alt="Wellington Apartments" />
                            <div className="holding2">
                                      <Link to="/" className="tohome2"  onClick={() => window.scrollTo(0, 0)}>
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
              <img src="forest.jpg" alt="forest edge" />
              <span>
                <h2>Forest Edge</h2>
                <h4>london, on</h4>


              </span>
            </div>

                        <div className="middle-image">
              <img src="forest_wide.png" alt="middle" />
            </div>

          </div>

          {/* SECOND COLUMN (3 PROJECTS) */}
          <div className="collumn">
                        <div className="card-left">
              <img  src={`${import.meta.env.BASE_URL}/Projects/meadowilly.png`} alt="Meadowlily" />
              <span>
                <h2>Meadowlily</h2>
                <h4>LONDON, ON</h4>

              </span>
            </div>

            <div className="card-right">
              <img src="southtowers.png" alt="south towers" />
              <span>
                <h2>Southern Towers</h2>
                <h4>LONDON, ON</h4>

              </span>
            </div>
            <div className="middle-image">
              <img src="sou_res.png" alt="middle" />
            </div>
            <div className="card-left">
              <img src="aura2.jpg" alt="Meadowlily" />
              <span>
                <h2>Aura Living</h2>
                <h4>Chatham, ON</h4>

              </span>
            </div>
            <div className="middle-image">
              <img  src={`${import.meta.env.BASE_URL}aurawide.jpg`} alt="middle" />
            </div>
          </div>

          {/* THIRD COLUMN (2 PROJECTS + middle image) */}
          <div className="collum">
            <div className="card-right">
              <img src="top image.png" alt="Highland Elite towers" />
              <span>
                <h2>Wellington <br />
Apartments</h2>
                <h4>LONDON, ON</h4>
 
              </span>
            </div>



            <div className="card-left">
              <img src="lon_west.png" alt="London West
Tower" />
              <span>
                <h2>London West <br />
Tower</h2>
                <h4>LONDON, ON</h4>

              </span>
            </div>
                        <div className="middle-image">
              <img src="lon_west.png" alt="middle" />
            </div>
          </div>

          {/* FOURTH COLUMN (2 PROJECTS) */}
          <div className="collumn">
            <div className="card-right">
              <img  src={`${import.meta.env.BASE_URL}/Projects/church_cru.png`} alt="Huron Church CRU Units" />
              <span>
                <h2>Huron Church CRU <br /> Units</h2>
                <h4>Windsor, ON</h4>

              </span>
            </div>
            <div className="middle-image">
              <img src="cru_wide.png" alt="middle" />
            </div>

            <div className="card-left">
              <img src="gains.png" alt="Hyland Office Building and CRUs" />
              <span>
                <h2>Gainsborough <br />
Tower</h2>
                <h4>london, ON</h4>
              </span>
            </div>
                        <div className="card-right">
              <img src="York-Towers.jpg" alt="Huron Church CRU Units" />
              <span>
                <h2>Downtown Skyline</h2>
                <h4>london, ON</h4>

              </span>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}
