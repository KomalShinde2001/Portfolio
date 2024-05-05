import React from 'react'
import "./Contact.css"
import mail_icon from '../Images/E-mail icon.jfif'
import call_icon from '../Images/Call icon.png'
import location_icon from '../Images/location icon.png'

const Contact = () => {
  return (
    <div id="landContact"  className='contact'>
      <div className="contact-title">
      <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-detail">
          
          <img src={mail_icon} alt="Email Icon"/> <p>komalshinde1202@gmail.com</p>
        </div>
       
        <div className="contact-detail">
        
          <img src={call_icon} alt="Call Icon"/> <p>+91 9322734251</p>
        </div>
        
        <div className="contact-detail">
        
          <img src={location_icon} alt="Location Icon"/> <p>Pune, Maharashtra</p>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Contact
