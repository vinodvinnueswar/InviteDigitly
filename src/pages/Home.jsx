
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Features from '../components/Features'
import Themes from '../components/Themes'
import Context from '../components/Context'
import Footer_site from '../components/Footer_site'

const Home = () => {
  return (
    <>
     <div className="Home-head-tags">
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
      
    </>
  
  )
}

export default Home