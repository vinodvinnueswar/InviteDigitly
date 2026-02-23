import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_Path } from '../helpers/ApiPath';


const Filtered = () => {
    const navigate = useNavigate()
    const { category } = useParams(); // 👈 from URL
      const [loading, setLoading] = useState(true)

  const [vendors , setVendorData] = useState([]);

  const categoryDataHandler = async() =>{
      try {
        const response = await fetch(`${API_Path}/vendor/all-vendors`)
        const newCategoryData = await response.json();
        setVendorData(newCategoryData.vendors)
        setLoading(false)
        console.log(newCategoryData)

      } catch (error) {
        console.log("Failed to fetch data");
        alert("failed to fetch data")
        setLoading(false)
      }

  }

    useEffect(() => {
      categoryDataHandler()
    },[])

    
  const filteredData = vendors.flatMap(vendor =>
  (vendor.inventory || []).filter(item =>
    item.category &&
    item.category.toString().toLowerCase().trim() ===
    category.toLowerCase().trim()
  )
);

if (loading) {
  return (
    <div className="premium-loading">

      <div className="luxury-spinner"></div>

      <h2>Loading Beautiful Invitation Designs...</h2>

      <div className="skeleton-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="skeleton-card" key={index}></div>
        ))}
      </div>

    </div>
  )
}




  return (
       
      <div className="Inventory">
        <div className="Inventory-Details">
           <h2>{category.toUpperCase()} INVITATIONS</h2>
             <p>Select a design and customize your digital wedding card</p>
        <p style={{fontSize:"12px"}}>Note : Click the images to see the Digital Cards</p>
        </div>
      <div className="Inventory-Products">
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <div className="premium-card">
                  {/* Preview Link */}
              <a href={item.webUrl} target="_blank" rel="noopener noreferrer" className="image-wrapper">

                <img
                  src={item.image || "/no-image.png"}
                  alt={item.name}
                  loading="lazy"
                />

                <div className="overlay">
                  <span className="preview-btn">Live Preview</span>
                </div>

                <span className="badge">POPULAR</span>

              </a>

              <div className="card-content">
                <h4>{item.name}</h4>

                 <div className="price-box">
                  <span className="old-price">₹2999</span>
                  <span className="new-price">₹{item.price}</span>
                </div>

                 <button
                  className='btn-order'
                  onClick={() => navigate('/Create_Invitation')}
                >
                  Order Now
                </button>

                
              </div>



                </div>
              ))
            ) : (
              <h3>No items found</h3>
  )}
</div>

    </div>
  )
}

export default Filtered