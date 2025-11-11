import React from 'react'
import Meals20Offproduct from '../constant/Meals20offproduct.js'
import meals from '../constant/Meals20offproduct.js'

const Meals20Off = () => {
  return (
    <div>
          <div className='row col-md-12 col-sm-6 '>
            {
              meals.map((data)=>
          ( <div className='col menuProductCardCol ' key={data.id}>
                 <img src={data.img} alt='' className='menuProductImg'/>
                <div className='menuProductCard '>
                  <img src={data.imgveg} alt='' className='menuProductCardImg '/>
                  <div className='menuProductCardBody'>
                    <h6 className='menuProductCardTitle'>{data.title}</h6>
                    <p className='menuProductCardText'>{data.desc}</p>
                  </div>
                </div>
            </div>)
              )
            }
            </div>
    </div>
  )
}

export default Meals20Off

