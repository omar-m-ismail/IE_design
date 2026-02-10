import "../footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function Footing() {
  return (
      <footer className="projects-footer">
  <div className="galleryyy">
    <img src="logo2.png" alt="Civil Engineering" />
    <hr />

    <div className="roooow">
      <div className="location">
        <h2>location</h2>
        <ul>
        <il><FontAwesomeIcon icon={faLocationPin} />
2C-1701 Richmond Street, London, Ontario. <br /></il>
        <il><FontAwesomeIcon icon={faLocationPin} />
675 Cochrane Drive East Tower 6th Floor,<br /></il>
        <il>Markham ON <br /></il>
        <il>Tel: +1 (519) 878-5488 <br />
        </il>
        <il>cs@creativestr.ca</il>
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
  );
}
