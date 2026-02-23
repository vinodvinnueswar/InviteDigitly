import React from "react";
import { useNavigate } from "react-router-dom";

import weddingImg from "../assets/images/wedding.png";
import birthdayImg from "../assets/images/birthday.png";
import halfsareeImg from "../assets/images/half-saree.png";
import housewarmingImg from "../assets/images/house-warming.png";

const Categories = () => {

  const navigate = useNavigate();

  const categories = [
    {
      title: "Wedding Invitations",
      image: weddingImg,
      link: "/Inventory/wedding",
    },
    {
      title: "Birthday Invitations",
      image: birthdayImg,
      link: "/Inventory/birthday",
    },
    {
      title: "Half Saree Ceremony",
      image: halfsareeImg,
      link: "/Inventory/halfsaree",
    },
    {
      title: "House Warming Invitations",
      image: housewarmingImg,
      link: "/Inventory/housewarming",
    },
  ];

  return (
    <section className="categories">

      <h2>Choose Your Invitation Category</h2>

      <p className="category-subtitle">
        Discover beautifully designed digital invitations.
      </p>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => navigate(item.link)}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Categories;