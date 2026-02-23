import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="Home-webpage">
      <section className="hero">

        <div className="hero-content">

          <h1>
            Design Elegant Digital <br />
            Invitations For Your Special Moments
          </h1>

          <p>
            Create and share beautiful digital invitation cards for weddings,
            birthdays, traditional ceremonies and celebrations.  
            Invite your loved ones instantly with stylish and customizable
            invitation designs.
          </p>

          <div className="hero-buttons">
            <button
              className="btn primary"
              onClick={() => navigate("/Create_Invitation")}
            >
              Create Your Invitation
            </button>

            <button
              className="btn secondary"
              onClick={() => navigate("/Samples")}
            >
              Explore Sample Designs
            </button>

          </div>

        </div>

      </section>
    </div>
  );
};

export default Hero;