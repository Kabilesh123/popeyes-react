import React from 'react'
import img1 from '../images/hero-banner-1@2x2.jpg'
import img2 from '../images/hero-banner-2@2x.jpg'
import './Home.css'
import img3 from '../images/cuisine-icon.svg'
import img4 from '../images/delivery-icon.svg'
import img5 from '../images/store-icon.svg'
import img6 from '../images/burger.png'
const Home = () => {
  return (
    <div className="body">
     <section className='carosuel'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src={img1} class="d-block  imgcarousel" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block  imgcarousel" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon changebtn" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon changebtn" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     </section>

     {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

    <section className='achievement'>
       
            <div className='container achievementContainer'>
              <div className='row'>

                <div className='col-6 col-sm-3 d-flex achievementcol'>
                   <img src={img3} alt="" className='achievementimg' />
                  <div>
                    <h2 className='achievementh2'>Serving</h2>
                    <h5>Since 1972</h5>
                  </div>
                </div>

                <div className='col-6 col-sm-3 d-flex achievementcol'>
                   <img src={img4} alt="" className='achievementimg' />
                  <div>
                    <h2 className='achievementh2'>25+</h2>
                    <h5>Countries</h5>
                  </div>
                </div>

                <div className='col-6 col-sm-3 d-flex achievementcol'>
                   <img src={img5} alt=""  className='achievementimg'/>
                  <div>
                    <h2 className='achievementh2'>3000+</h2>
                    <h5>Stores</h5>
                  </div>
                </div>

                <div className='col-6 col-sm-3 d-flex achievementcol4'>
                   <img src={img6} alt="" className='achievementimg1'/>
                  <div>
                    <h2 className='achievementh2'>250 Million +</h2>
                   <h5>Chicken Sandwiches served</h5>
                  </div>
                </div>
              </div>
            </div>
    </section>
    </div>
  )
}

export default Home
