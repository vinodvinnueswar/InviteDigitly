import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo/Logo-img.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
         <div className="logo">
        <img src={Logo} alt="" />
        <h1 className="logo">InviteDigitly</h1>
      </div>
        {/* <img className="Gold_Line" src={GoldTag} alt="tagline decoration" /> */}
        <p className="tagline">Elegant Digital Invitations for Every Celebration</p>
      </div>
      <br />

      {/* <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
        <li><Link to="/Samples">Samples</Link></li>
        <li><Link to="/Create_Invitation">Create Invitation</Link></li>
      </ul> */}

    </nav>
  );
};

export default Navbar;