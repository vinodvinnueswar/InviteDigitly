import React from 'react'
import instagram from "../assets/images/Social-media/instagram.png";
import facebook from "../assets/images/Social-media/communication.png";
import whatsApp from "../assets/images/Social-media/whatsapp.png";

const Footer_site = () => {
  return (
    <div className="Footer-Website">
        <div className="Footer-row">

          <div className="site-details">
          <h2>InviteDigitly</h2>
            <p>
            InviteDigitly is a creative digital invitation platform crafted to make
            your celebrations memorable. We design elegant, modern and customizable
            e-invites for weddings, birthdays, traditional ceremonies and special
            events. Share your happiness instantly with beautifully designed
            invitations that your friends and family will love.
            </p>
          </div>

          <div className="categories-details">
              <h2>Invitation Categories</h2>
              <ul>
                <li>Wedding Invitations</li>
                <li>Birthday Invitations</li>
                <li>Half Saree Ceremony</li>
                <li>House Warming Invitations</li>
              </ul>
          </div>

          <div className="Quick-links">
             <h2>Quick Links</h2>
            <ul>
              <li>View Invitation Samples</li>
              <li>Customer Reviews</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>
        <br />

        <footer className="footer">

          <div className="contact">
            <h2>Contact Us</h2>
            <p>WhatsApp : +91 9346999046</p>
            <p>Email : invitedigitly@gmail.com</p>
            <br />
            <p>We are happy to help you design the perfect digital invitation.</p>
          </div>
          <br />

          <div className="Social-media">
            <h2>Follow Us</h2>
            <div className="icons">
              <a href="https://www.instagram.com/invite.digitally_official">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576721319356">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://wa.me/message/53QBGU52ZJQCE1">
                <img src={whatsApp} alt="WhatsApp" />
              </a>
            </div>
            <br />
            <p>Stay connected with us for new invitation designs, ideas and updates.</p>
          </div>

        </footer>

        <div className="footer-bottom">
        <p>© 2026 InviteDigitly. All Rights Reserved.</p>
        </div>
      </div>
    
  )
}

export default Footer_site

