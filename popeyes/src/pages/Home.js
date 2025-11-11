import React from 'react'
import img1 from '../images/hero-banner-1@2x2.jpg'
import img2 from '../images/hero-banner-2@2x.jpg'
import './Home.css'
import img3 from '../images/cuisine-icon.svg'
import img4 from '../images/delivery-icon.svg'
import img5 from '../images/store-icon.svg'
import img6 from '../images/burger.png'
import productsbg from '../images/black-bg-pattern.svg'
import overlayimg from '../images/menu-bg.svg'
import overlayCnt from '../images/chicken-sandwich.png'
import productimg3 from '../images/menu-teal-bg.svg'
import productntImg3 from '../images/cajun-veg-burger.png'
import productimg2 from '../images/menu-grey-bg.svg'
import productimg22 from '../images/signature-chicken.png'
import carosuel21 from '../images/flavors-01.png'
import carosuel22 from '../images/flavors-bg-2.jpg'
import carosuel23 from '../images/flavors-bg-3.jpg'
import bgcenter from '../images/desktopQRBanner.jpg'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Menu from './Menu.js'
import Stores from '../pages/Stores.js';




// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const Home = () => {
  return (
    <>
      <Navbar/>
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
              <div className='row row-cols-2 row-cols-md-'>

                <div className='col d-flex achievementcol'>
                   <img src={img3} alt="" className='achievementimg' />
                  <div  className='achievementTxt'>
                    <h2 className='achievementh2'>Serving</h2>
                    <h5>Since 1972</h5>
                  </div>
                </div>

                <div className='col d-flex achievementcol'>
                   <img src={img4} alt="" className='achievementimg' />
                  <div  className='achievementTxt'>
                    <h2 className='achievementh2'>25+</h2>
                    <h5>Countries</h5>
                  </div>
                </div>

                <div className='col d-flex achievementcol'>
                   <img src={img5} alt=""  className='achievementimg'/>
                  <div  className='achievementTxt'>
                    <h2 className='achievementh2'>3000+</h2>
                    <h5>Stores</h5>
                  </div>
                </div>

                <div className='col d-flex achievementcol4'>
                   <img src={img6} alt="" className='achievementimg1'/>
                  <div  className='achievementTxt'>
                    <h2 className='achievementh2'>250 Million +</h2>
                   <h5>Chicken Sandwiches served</h5>
                  </div>
                </div>
              </div>
            </div>
    </section>

    {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

    <section className="products">
      <div className="productsbg" style={{
        backgroundImage:`url(${productsbg})`
      }} >

        <div className="signature">
          <div  className="signaturecnt">
            <h2 className="signatureH2"> Our Signature</h2>
          <h1 class="font">products</h1>
          </div>
          <button class="btn btn-outline-success" type="submit">View all menu</button>
        </div>

      </div>

      <div class="container products-cont">
        <div class="row col-md-12 col-sm-6 g-4">

          <div class="col">
  <div class="card" style={{
    width:'397px',
    height:'635px',
    backgroundImage:`url(${overlayimg})`,
    backgroundColor:`rgb(249, 68, 2)`,
    borderRadius:'45px',
     boxShadow: ' 2px 4px 10px rgba(0, 0, 0, 0.6)',

  }}>
 <div>
   <img src={overlayCnt} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title1">The Chicken sandwich</h5>
    <p class="card-text">The hype is real! Say hello to the new love of your life-our world-famous Chicken Sandwich </p>
    <a href="#" class="btn btn-primary btn-product">View all</a>
  </div>
 </div>
</div>
</div>


<div class="col">
  <div class="card" style={{
    width:'397px',
    height:'635px',
    backgroundImage:`url(${productimg2})`,
    backgroundColor:`rgb(145, 25, 135)`,
    borderRadius:'45px',
     boxShadow: ' 2px 4px 10px rgba(0, 0, 0, 0.6)',

  }}>
 <div>
   <img src={productimg22} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title2">Popeyes Signature Dish</h5>
    <p class="card-text">Dig into our signature chicken;Marinated for 12 hours in bold cajun seasonings for delicious flavours in every bite </p>
    <a href="#" class="btn btn-primary btn-product">View all</a>
  </div>
 </div>
</div>
</div>
     


<div class="col">
  <div class="card" style={{
    width:'397px',
    height:'635px',
    backgroundImage:`url(${productimg3})`,
    backgroundColor:`rgb(0, 178, 169)`,
    borderRadius:'45px',
     boxShadow: ' 2px 4px 10px rgba(0, 0, 0, 0.6)',

  }}>
 <div>
   <img src={productntImg3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cajun Veg Burger</h5>
    <p class="card-text">Not an exggeration!Ourcrispy and ulttery delicious cajun veg burger is what dreams are made of.</p>
    <a href="#" class="btn btn-primary btn-product">View all</a>
  </div>
 </div>
</div>
</div>

        </div>
      </div>
    </section>

    {/* /* --------------------products-------------------------------------------- */ }

  <section className='carosuel2'>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={carosuel21  } class="d-block w-100 carousel2img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 className='carosuel2h2'>Signature blend of bold</h2>
        <h1 className='carosuel2h1'>Cajun Flavors</h1>
        <p className='carosuel2p'>Our chicken is freshly and expertly coocked,busrted with bold cajun flavours that's like party in your mouth.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={carosuel22} class="d-block w-100 carousel2img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       <h2 className='carosuel2h2'>12 hours of</h2>
        <h1 className='carosuel2h1'>Marination</h1>
        <p className='carosuel2p'>Qulatiy takes time y'all. We marinate our chicken in cajun seasonings for at least 12 hours,You'll relish the flavors till last bite</p>     
         </div>
    </div>
    <div class="carousel-item">
      <img src={carosuel23} class="d-block w-100 carousel2img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       <h2 className='carosuel2h2'>All that crunch.
                  <h1>All that juiciness.</h1>
       </h2>
       
        <h1 className='carosuel2h1'>It's Pure joy!</h1>
        <p className='carosuel2p'>Our chicken is freshly and expertly coocked,busrted with bold cajun flavours that's like party in your mouth.</p>      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon changebtn" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon changebtn" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  </section>
    {/* /* --------------------carosuel2--------------------------------------------------------------------------- */ }


<section className='bgcenter'>
  <img src={bgcenter} alt=''className='bgcenterimg w-100 '/>
</section>

{/* ------------------------------------Qr----------------------------------------------------------------------------------------- */}




    </div>
    
<Footer/>
    </>
  )
}

export default Home
