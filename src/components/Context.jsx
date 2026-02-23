
import React from 'react'
import MobileImg from '../assets/images/Mobile_Img.png'

const Context = () => {
  return (
    <div className="Context_Container">
        <div className="Mobile_Img">
            <img src={MobileImg} alt="" />
        </div>
        <div className="context_details">
            <h3>Our Web-Based digital invitation</h3> <br />
            <h2>🌸 Step Into the Future of Digital Invitations</h2> <br />
            <p>Celebrate your special moments with stylish, interactive  <br /> online invitations designed for today’s world.</p>
            <br />
            <p>Make every occasion memorable — weddings, birthdays, engagements, <br /> housewarmings, and more — with elegant digital invites.</p>
            <br />
            <h3>✨ Why Choose Digital Invitations?</h3>
            <br />
            <p>
                ✔ Sleek & Contemporary Designs <br />
                ✔ Engaging Animations & Visual Effects <br />
                ✔ Photos, Videos & Music Support <br />
                ✔ Location Maps Included <br />
                ✔ Quick Sharing via WhatsApp & Social Apps <br />
                ✔ RSVP & Guest Tracking Made Simple <br />

            </p>
            
        </div>
    </div>
  )
}

export default Context