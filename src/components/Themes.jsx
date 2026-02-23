import React from 'react'
import Poster1 from '../assets/images/Poster_5.png'
import Poster2 from '../assets/images/Poster_7.png'
import Poster3 from '../assets/images/Poster_6.png'
import { useNavigate } from 'react-router-dom'

const Themes = () => {

const navigate = useNavigate()

const data = [
{
title: "Royal Floral Wedding",
image: Poster1
},
{
title: "Custom Birthday Party",
image: Poster2
},
{
title: "Classic Half-Saree Design",
image: Poster3
}
]

return (
<div className="Themes">

<section className="themes">

<h2>Beautiful Digital Wedding Invitation Themes</h2>

<br />

<p className="themes-subtitle">
Explore our exclusive collection of elegant and customizable digital
wedding invitations crafted to make your special day unforgettable.
Choose a design that perfectly reflects your love story.
</p>

<br />

<div className="theme-grid">

{data.map((item, index) => (

<div className="theme-card" key={index}>

<div className="theme-img">
<img src={item.image} alt={item.title} />
</div>

<div className="theme-info">
<h3>{item.title}</h3>

{/* <button
className="btn-theme"
onClick={() => navigate('/samples')}
>
View Demo
</button> */}

</div>

</div>

))}

</div>

</section>

</div>
)
}

export default Themes