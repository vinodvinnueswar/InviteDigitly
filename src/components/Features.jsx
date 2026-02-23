import React from 'react'
import Card_Theme from '../assets/images/Card_Theme.png'

const Features = () => {
  return (
    <div className="Context_Container">
            <div className="Mobile_Img">
                <img src={Card_Theme} alt="" />
            </div>
            <div className="context_details">
                 <h3>Experience Digital Wedding Invitations</h3> <br />
                <h2>Share Your Invitation Instantly</h2> <br />
                 <p>
                    Create a beautiful digital wedding invitation and share it instantly <br />
                    with your family and friends through WhatsApp.  <br />
                    No printing, no delivery delays — just a simple and modern way <br />
                    to invite everyone to your special day. <br />
                  </p>
                <br />
                 <div className="feature-tags">
                  <span>📱 Instant Sharing</span>
                  <span>📄 No Printing</span>
                  <span>🚚 No Courier</span>
                  <span>🌱 Eco Friendly</span>
                </div>

                <br />
                  <p className="qr-text">
                    Guests can simply scan the QR code to open the invitation <br />
                    and view all wedding details instantly.
                  </p> 
                
            </div>
        </div>
  )
}

export default Features

