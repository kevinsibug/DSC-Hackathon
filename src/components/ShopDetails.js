import React from 'react'

import Pin from '../static/map-pin.svg'
import Rating from '../static/rating.png'
import JuanP from '../static/juanp-logo.png'

const ShopDetails = (props) => {
    return (
      <div className='row'>
        <div className='col'>
        <div className='ro shop-info'>
          <img className = "shop-logo" src = {JuanP}></img>
          <div>         
            
            <h1 className='shop-header'>{props.title}</h1>
          <div className='tag-content'>
            FOOD
          </div>
          </div>

        </div>
        <div className='row align-self-center'>
          <img src = {Pin} className='social-icon align-bottom'/>
          <p>123 Sampaguita Street, Clarkview, Angeles City, Pampanga</p>
        </div>
        <p className='impt-p'>Service Hours</p>
        <p className='footer-indent'>Wed 11:00 - 11:30</p>
        <p className='footer-indent'>Fri 12:00 - 11:30</p>
        </div>
        <div className='col float-right'>
        <div className='rating float-right'>
        <img src= {Rating} />
        <p className='rating-num'>5.0</p>
        </div>
        </div>
      </div>
    )
}

export default ShopDetails
