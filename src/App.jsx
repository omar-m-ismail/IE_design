import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Projects from "./pages/ProjectsPage";
import EngineeringTeam from "./pages/EngineeringTeam";
import User from "./pages/Project";
import TopNav from "./layout/topNavbar";
import P404 from "./pages/P404";
import Member from "./pages/team_member";
import UploadProj from "./pages/UploadProjects";
import WhatWeDo from "./pages/WhatWeDo";
import Addmember from "./pages/AddMember";

function App() {
  return (
    <div>


      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />          
          <Route path="/Projects" element={<Projects />} />
          <Route path="/EngineeringTeam" element={<EngineeringTeam />} />
          <Route path="/EngineeringTeam/:id" element={<Member />} />
          <Route path="/UploadProjects" element={<UploadProj />}/>
          <Route path="/Projects/:id" element={<User />} />
          <Route path="/AddMember" element={<Addmember />} />
                 <Route path="*" element={<P404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
