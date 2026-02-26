import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_Path } from '../helpers/ApiPath'

const Samples_Page = () => {
  const [loading, setLoading] = useState((true))

  const navigate = useNavigate()
  const [vendors, setVendors] = useState([])
  
  
  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_Path}/vendor/all-vendors`)
      const data = await response.json()
      setVendors(data.vendors || [])
      setLoading(false)
    } catch (error) {
      console.error('failed to fetch data', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    vendorFirmHandler()
  }, [])

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
        <h2> Invitation Templates</h2>
        <p>Select a design and customize your digital wedding card 
         <span style={{fontSize:"10px"}}> Note : Click the images to see the Digital Cards</span>
        </p>
      </div>

      <div className="Inventory-Products">

        {vendors.length === 0 && <h3>No items found</h3>}

        {vendors.map(vendor =>
          vendor.inventory?.map(item => (

            <div className="premium-card" key={item._id}>

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
        )}

      </div>
    </div>
  )
}

export default Samples_Page