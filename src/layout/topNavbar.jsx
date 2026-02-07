import "../nav.css";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarLink,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const links = [
  { label: "team", url: "/EngineeringTeam" },
  { label: "projects", url: "/Projects" },
  { label: "contact us", url: "/contact_us" },
  { label: "what we do", url: "/WhatWeDo"}
];

export default function TopNav() {
  return (
<Navbar className="topnav" fluid rounded>

  <NavbarBrand as={Link} to="/" className="topnav-brand">
    IE Design
  </NavbarBrand>

  <div className="home_sections">
    <NavbarLink as={Link} to="/EngineeringTeam" className="topnav-link">team</NavbarLink>
    <NavbarLink as={Link} to="/Projects" className="topnav-link">projects</NavbarLink>
    <NavbarLink as={Link} to="/contact_us" className="topnav-link">contact us</NavbarLink>
    <NavbarLink as={Link} to="/WhatWeDo" className="topnav-link">what we do</NavbarLink>
  </div>

  <NavbarToggle className="topnav-toggle" />
</Navbar>




  );
}
