import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Features from '../components/Features'
import Themes from '../components/Themes'
import Context from '../components/Context'
import Footer_site from '../components/Footer_site'
import logo from "../assets/Logo/Logo-img.png";

const Home = () => {

  const [loading, setLoading] = useState(() => {
  // check if intro already played
  const introPlayed = sessionStorage.getItem("introPlayed");
  return !introPlayed; 
});


 useEffect(() => {

  // if intro already shown → don't run timer
  if (!loading) return;

  const timer = setTimeout(() => {
    setLoading(false);

    // mark intro as shown
    sessionStorage.setItem("introPlayed", "true");

  }, 3500);

  return () => clearTimeout(timer);

}, [loading]);


  
if (loading) {
  return (
    <div className="brand-loader">

      <div className="logo-wrapper">

        {/* Glow Circle */}
        <div className="logo-aura"></div>

        {/* Logo */}
        <img src={logo} alt="InviteDigitly" className="brand-logo"/>

        {/* Sparkles */}
        <span className="spark s1"></span>
        <span className="spark s2"></span>
        <span className="spark s3"></span>
        <span className="spark s4"></span>

      </div>

      <h2 className="brand-title">InviteDigitly</h2>
      <p className="loading-text">Elegant Digital Invitations</p>

    </div>
  )
}

  return (
    <div className="Home-head-tags fade-in">
      <Navbar/>
      <Hero/>
      <Categories/>
      <div className="BG_Themes">
        <Context/>
        <Features/>
      </div>
      <Themes/>
      <Footer_site/>
    </div>
  )
}

export default Home