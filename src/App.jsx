import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Samples_Page from './pages/Samples_Page';
import Categories from './components/Categories'
import './App.css'
import Filtered from './pages/Filtered';
import CreateInvitation from './components/CreateInvitation';
 
 const App = () => {
   return (
     <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Samples" element={<Samples_Page/>} />
        <Route path='/Create_Invitation'  element={<CreateInvitation/>}/>
       <Route path="/Inventory/:category" element={<Filtered />} />
          {/* <Route path="/template/:slug" element={<TemplatePage />} /> */}
      </Routes>
    </BrowserRouter>
     </div>
   )
 }
 
 export default App