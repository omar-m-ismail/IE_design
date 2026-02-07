import "../wwd.css";
import { useEffect, useState } from "react";

const WhatWeDo = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/what-we-do")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="container">
      {services.map((item) => (
        <div className={`row ${item.rowClass}`} key={item.id}>
          <div className="box">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>

          {item.image && (
            <img className="img" src={item.image} alt={item.title} />
          )}
        </div>
      ))}
    </section>
  );
};

export default WhatWeDo;
