import React from 'react'
import './Contact.css'
import Navbar from '../components/Navbar'
import bgImage from '../images/common-banner.png'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='body'>
      <Navbar/>

      <section className='contact-section'>
        <div className='bgImage'> 
          <h1 className='bgImageinH1'>Contact Us</h1>
        </div>

        <div className='contact-content'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2595008148505!2d77.3613337!3d28.5319188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce720fb8c78a3%3A0xfc94dcd7ce04ccfa!2sSkymarkOne%20Sector%2098!5e0!3m2!1sen!2sin!4v1761888325157!5m2!1sen!2sin" className='frame'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
           <div className='contact-form'>
            <h6>Address</h6> 
           <p>Jubilant FoodWorks Limited 15th Floor, Tower E Skymark One, Plot No. H – 10/A Sector 98, Noida- 201301, U.P., India</p>
              <h6>Call Us</h6>
                <p>1234567890</p>
                <h6>Email Us</h6>
                <p>wecare@popeyes.in</p>
                <h6>In the event of a Grievance</h6>
                <p>escalation@popeyes.in</p>
            </div>


   </div>

        </section>

        
        <Footer/>
    </div>
  )
}

export default Contact
