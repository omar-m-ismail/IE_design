import "../team.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EngineeringTeam() {
  const [engineeringteam, setEngineeringTeam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/team")
      .then((res) => res.json())
      .then((data) => setEngineeringTeam(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Users</h2>

      <div className="gallery">
        {engineeringteam.map((user) => (
          <figure key={user.id}>
            <img src={user.image} alt={user.name} />
            <figcaption>
              <h3>{user.name}</h3>
              <h4>{user.role}</h4>
              <Link to={`${user.id}`}>View</Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}