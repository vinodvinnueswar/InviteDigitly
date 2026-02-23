import React, { useState }  from 'react'
import  whatsApp from '../assets/images/Social-media/whatsapp.png'

const CreateInvitation = () => {
   const [form, setForm] = useState({
name: "",
date: "",
count: "",
pref: "",
});


const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


const sendWhatsApp = () => {
const { name, date, count, pref } = form;


if (!name || !date || !count || !pref) {
alert("Please fill all details");
return;
}


const message = `Wedding Card Order Details:\n\nName: ${name}\nEvent Date: ${date}\nInvitations: ${count}\nPreferences: ${pref}`;
const encodedMsg = encodeURIComponent(message);


const phoneNumber = "917680812372"; // Replace with your number
window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
};

  return (
    <div className="Create_Invitation">
        <h2>Send Your Details on WhatsApp to <br />order your wedding Cards!</h2>
        <div className="Invitation_Details_filling">
            <div className="Mess_text1">
                <p>Hi,I'd like to order wedding cards!</p>
            </div>
            <div className="Mess_text2">
                <p>Sending My Details</p>
            </div>
            {/* Details Card */}
            <div className="details_card">
                <h2>Share Your Details</h2>
               <form action="" className='form_card'>
                
                <input type="text" name="name" placeholder="Your Name" 
                  value={form.name}
                  onChange={handleChange}
                />
                
                <input  name="date" placeholder='Event date' 
                  value={form.date}
                    onChange={handleChange}
                /> <br /><br />

                <input name="count" placeholder='No.of Invitations' 
               value={form.count}
                onChange={handleChange}
                />

                <input name="pref" placeholder="Card Preference" 
                value={form.pref}
                onChange={handleChange}
                />
               </form>

               <button  onClick={sendWhatsApp} class="whatsapp-btn" id="whatsappBtn">
                <img src={whatsApp} alt="" />Send on WhatsApp</button>
            </div>
            
            
            {/* Features */}
            <div class="features-1">
            <div class="feature">⚡ Fast & Easy</div>
            <div class="feature">🔒 Secure & Private</div>
            <div class="feature">💌 Beautiful Designs</div>
            </div>
              
              {/* Footer */}
            <div class="footer-1">Get a Quick Reply & Confirm Your Order</div>
        </div>
    </div>
  )
}

export default CreateInvitation