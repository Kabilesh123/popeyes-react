import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer.js'
import './Stores.css'
import bgImage from '../images/common-banner.png'
import bgImagein from '../images/street-sign.svg'
import storeLocation from '../images/location.png'
import StoresProduct from '../constant/StoresProduct.js'




const Stores = () => {
  return (
    <div>
      <Navbar/>
      <section className='stores-section'>
        <div className='bgImage'>
          <img src={bgImagein} alt='' className='bgImagein'/>
          <h1 className='bgImageinH1'>Our Stores</h1>
        </div>
{/* -------------------------------------------------------------------------------------------------------------------- */}
      <div className='stores-content-full'>
          <div className='stores-content'>
       <h2>City :</h2>
       <div class="dropdown">
  <button class="btn-stores  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Coimabatore
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>


        </div>
        <hr className='hrStore'/>

        <div className='stores-coimbatore'>
          <h1 className='stores-coimbatore-h1'>Popeyes Stores in Coimbatore</h1>
          <p className='stores-coimbatore-p'>Make way, Coimbatore, for a sensation like no other! Indulge in delicious food, such as our world-famous Chicken Sandwich, Popeyes Signature Chicken, Crispy Cajun Veg Burger, Louisiana-inspired Cajun fries and a variety of menu items available only at a Popeyes restaurant near you.</p>
        </div>
     
      <div className='stores-locations'>
        <div className='container-fluid locationsContainer'>
          <div className='row '>
           {
            StoresProduct.map((data)=>(
               <div className='col-3 col-sm-12 colOfLocation' key={data.id}>
              <div class="card">
   <div className='locationimg'>
                <a href=' //maps.app.goo.gl/2GD8KPV7MXJJDMfM6'><img src={data.img1} alt='' className='locationsImg'/></a>
               </div>
              <div className='locationsTxt'>
                <h5 className='locationsTxtH4'>{data. h4cont}</h5>
                <h6 className='locationsTxtH6'>Address</h6>
                <p className='locationsTxtP'>{data. pATxt}</p>
                  <h6 className='locationsTxtH6'>Timing</h6>
                <p className='locationsTxtP'>{data.pTime}</p>
                <h6 className='locationsTxtH6'>Email</h6>
                <a href='' ><p className='locationsTxtPA'>{data.pemail}</p></a>
                <h6 className='locationsTxtH6'>Telephone</h6>
                <p className='locationsTxtP'>1234567890</p>
              </div>
</div>
</div>

            ))
           }
           
            
          
          
          
          </div>
        </div>

      </div> 
       </div>
       <Footer/>
      </section>
    </div>
  )
}

export default Stores
