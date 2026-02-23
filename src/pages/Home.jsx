import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Features from '../components/Features'
import Themes from '../components/Themes'
import Context from '../components/Context'
import Footer_site from '../components/Footer_site'
import logo from "../assets/Logo/Logo.png";

const Home = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 3000);   // ← increase to 3 seconds

  return () => clearTimeout(timer);
}, []);
  if (loading) {
    return (
       <div className="brand-loader">

      <div className="logo-container">
        <img src={logo} alt="InviteDigitly" className="brand-logo"/>
        <div className="shine"></div>
      </div>

      <p className="loading-text">Crafting Your Beautiful Invitation...</p>

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