import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo/Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
         <div className="logo">
        <img src={Logo} alt="" />
        <h1 className="logo">InviteDigitally</h1>
      </div>
        {/* <img className="Gold_Line" src={GoldTag} alt="tagline decoration" /> */}
        <p className="tagline">Elegant Digital Invitations for Every Celebration</p>
      </div>
      <br />

    </nav>
  );
};

export default Navbar;