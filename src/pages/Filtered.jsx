import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_Path } from '../helpers/ApiPath';


const Filtered = () => {
    const navigate = useNavigate()
    const { category } = useParams(); // 👈 from URL

  const [vendors , setVendorData] = useState([]);

  const categoryDataHandler = async() =>{
      try {
        const response = await fetch(`${API_Path}/vendor/all-vendors`)
        const newCategoryData = await response.json();
        setVendorData(newCategoryData.vendors)
        console.log(newCategoryData)

      } catch (error) {
        console.log("Failed to fetch data");
        alert("failed to fetch data")
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




  return (
       
      <div className="Inventory">
        {/* <div className="Back-Button">
            <button className='btn-Back' onClick={ () => navigate('/')}>🡰</button>
        </div> */}
        <br />
        <br />
        <div className="Inventory-Details">
           <h2>{category.toUpperCase()} INVENTORY</h2>
        </div>
      <div className="Inventory-Products">
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <div className="card">
                <Link className="Products" to={item?.webUrl}>
                <div key={item._id}>
                  <img
                  src={item.image}
                  alt={item.name || 'Product'}
                  />
                  {/* <h4>{item.name}</h4> */}
                </div>
                </Link>
                 <button className='btn-order' onClick={() => navigate('/Create_Invitation')}>Order Now</button>
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