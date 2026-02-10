import "../projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="page">
      <header>
        <br />
      </header>

      <div className="page_content">
        <Link to="/" className="tohome">
          Home →
        </Link>

        <div className="gallery2">

          {/* FIRST COLUMN (2 PROJECTS) */}
          <div className="collum">
            <div className="card-left">
              <img src="/Projects/ox_towers.png" alt="oxford towers" />
              <span>
                <h2>oxford towers</h2>
                <h4>london, on</h4>
                <h3>Estimated Budget: $200 million</h3>
                <p>
                  Creative Structures was retained to provide structural engineering analysis and work on SPA for this residential project in London, Ontario. The project consists of Three (3) 22-storeys and 3 levels of podium parking. The buildings are constructed of CIP concrete and CIP two-way slab concrete floors and COMSLAB concrete floors.
                </p>
              </span>
            </div>

            <div className="card-right">
              <img src="/Projects/well_towers.png" alt="Wellington Apartments" />
              <span>
                <h2>Wellington Apartments</h2>
                <h4>LONDON, ON</h4>
                <p>
                  An infill residential development within an existing shopping centre, comprising two apartment buildings of 32 and 30 storeys.
                </p>
                <p>
                  scope <br />Master Planning <br />Site Plan Approval <br />Structural Engineering"
                </p>
              </span>
            </div>


          </div>

          {/* SECOND COLUMN (3 PROJECTS) */}
          <div className="collumn">
            <div className="card-left">
              <img src="/Projects/sou_res.png" alt="Southern Towers" />
              <span>
                <h2>Southern Towers</h2>
                <h4>LONDON, ON</h4>
                <h3>Estimated Budget: $250 Million</h3>
                <p>
                  This residential development consists of three 17-storey towers over a four-level podium parking structure. The buildings are constructed using cast-in-place concrete, incorporating two-way slab and Hambro floor systems.
                </p>
              </span>
            </div>

            <div className="card-right">
              <img src="/Projects/aura blueprint.jpg" alt="Aura Living" />
              <span>
                <h2>Aura Living</h2>
                <h4>Chatham, ON</h4>
                <h3>Estimated Budget: $42M</h3>
                <p>
                  Aura Living is a thoughtfully designed mixed-use development. The project is conceived as a mid-rise masonry building, featuring hollow-core slab floor systems and cast-in-place concrete footings to ensure long-term durability and structural efficiency. Construction is currently underway, bringing Aura Living from concept to reality in Chatham.
                </p>
              </span>
            </div>
            <div className="card-left">
              <img src="/Projects/meadowilly.png" alt="Meadowlily" />
              <span>
                <h2>Meadowlily</h2>
                <h4>LONDON, ON</h4>
                <p>
                  A residential townhouse subdivision comprising 153 townhouse and stacked townhouse units. The development includes a mix of 3-unit and 6-unit townhouse blocks, as well as stacked townhouse buildings arranged along internal private roads with surface parking. The site layout provides organized parking courts, landscaped areas, and access from Meadowlily Road South.
                </p>
              </span>
            </div>
          </div>

          {/* THIRD COLUMN (2 PROJECTS + middle image) */}
          <div className="collum">
            <div className="card-right">
              <img src="/Projects/white_oaks.png" alt="Highland Elite towers" />
              <span>
                <h2>Highland Elite towers</h2>
                <h4>LONDON, ON</h4>
                <h3>Estimated Budget: $300 Million</h3>
                <p>
                  This residential development consists of two 17-storey towers over a four-level podium parking structure. The buildings are constructed using cast-in-place concrete, incorporating two-way slab and Hambro floor systems.
                </p>
              </span>
            </div>

            <div className="middle-image">
              <img src="highelite_wide.png" alt="middle" />
            </div>

            <div className="card-left">
              <img src="/Projects/springbank.png" alt="Springbank Drive" />
              <span>
                <h2>Springbank Drive</h2>
                <h4>LONDON, ON</h4>
                <h3>Estimated Budget: $52M</h3>
                <p>
                  Two 15-storey residential apartment buildings constructed with cast-in-place concrete walls and Hambro floor systems. The development includes a three-storey podium and two levels of underground parking. Lateral loads from wind and seismic forces are resisted by cast-in-place concrete shear walls, with foundations consisting of raft, strip, and pad footings.
                </p>
              </span>
            </div>
          </div>

          {/* FOURTH COLUMN (2 PROJECTS) */}
          <div className="collumn">
            <div className="card-right">
              <img src="/Projects/church_cru.png" alt="Huron Church CRU Units" />
              <span>
                <h2>Huron Church CRU Units</h2>
                <h4>Windsor, ON</h4>
                <h3>Status: Completed</h3>
                <p>
                  A commercial retail development comprising multiple Commercial Retail Units (CRUs). The project included full architectural, structural, mechanical, and electrical (Arch/STR/MEP) design services. The total building area consists of approximately 23,000 ft² and 7,100 ft², providing flexible retail spaces designed to accommodate a range of commercial tenants.
                </p>
              </span>
            </div>

            <div className="card-left">
              <img src="/Projects/hyland_office.png" alt="Hyland Office Building and CRUs" />
              <span>
                <h2>Hyland Office Building and CRUs</h2>
                <h4>london, ON</h4>
                <h3>Status: Completed</h3>
                <p>
                  A three-storey office building with two infill Commercial Retail Units (CRUs). The project included full architectural, structural, mechanical, and electrical (Arch/STR/MEP) design services, delivering a coordinated mixed-use commercial development.
                </p>
              </span>
            </div>
          </div>

        </div>

        <div className="westdell">
          <img src="westdell.png" alt="" />
        </div>
      </div>
    </div>
  );
}
