import React from 'react'
import './Menu.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import firstbg from '../images/menu-offer-banner.jpg'
import menulist from '../constant/MenuList.js'
import { data, Outlet } from 'react-router-dom'
import mProduct1 from '../images/mProduct1.png'
import veg from '../images/veg.svg'
import Menuproducts from '../constant/Menuproducts.js'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div className='body'>
      <Navbar/>
          <section>
        <img src={firstbg} alt='' className='firstbg w-100'/>

        <div className='container-fluid contMenu'>
          <div className='row'>

          {
            menulist.map((data)=>(
               <div className='col menulistCol' key={data.id}>
                <Link to={data.url} style={{textDecoration:'none'}}>
                
                    <p className='menulistA'>
              {data.title}
             </p></Link>
         
            </div>

            ))
          }
          </div>
        </div>
{/* ---------------------------------------menuList------------------------------------------------------------------- */}
          <div className='container-fluid menuProductContainer '>
            <Outlet/>
       
          </div>
          </section>
          <Footer/>
  
    </div>
  )
}

export default Menu
