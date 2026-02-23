import React, { useState } from "react";

import  "../login.css";

export default function Login(){
    const [query, setQuery] = useState("");
  const [members, setMembers] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/search-members/?q=${query}`
      );

      const data = await response.json();
      setMembers(data.results);
      co
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    return(
      <div className="login">
        <div className="login-page">
        <h1>Login</h1>
        <div className="name">
            <h2>name</h2>
            <input type="text" placeholder="username" value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
        <div className="password">
            <h2>password</h2>
            <input type="text" placeholder="password" />
        </div>

        <button onClick={handleSearch}>login</button>
        </div>
      </div>  
    )
}