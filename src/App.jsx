import { Routes, Route, useLocation  } from "react-router-dom";
import Home from "./pages/HomePage";
import Projects from "./pages/ProjectsPage";
import EngineeringTeam from "./pages/EngineeringTeam";
// import User from "./pages/Project";
import Footing from "./layout/footer";
import P404 from "./pages/P404";
// import Member from "./pages/team_member";
import UploadProj from "./pages/UploadProjects";
// import WhatWeDo from "./pages/WhatWeDo";
// import Addmember from "./pages/AddMember";
import Login from "./pages/LoginPage";

function App() {
    const location = useLocation();

  const hideOnRoutes = [
    "/LoginPage",
    "/UploadProjects",
    "/AddMember",
    "/projects" // if you enable later
  ];

  const shouldHideFooter =
    hideOnRoutes.includes(location.pathname) ||
    location.pathname === "*";

  return (
    
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<Login />} />
          {/* <Route path="/WhatWeDo" element={<WhatWeDo />} />           */}
          <Route path="/Projects" element={<Projects />} />
          <Route path="/EngineeringTeam" element={<EngineeringTeam />} />
          {/*<Route path="/EngineeringTeam/:id" element={<Member />} />*/}
          <Route path="/UploadProjects" element={<UploadProj />}/>

        </Routes>
      </div>

      {!shouldHideFooter && <Footing />}
    </div>
  );
}

export default App;
