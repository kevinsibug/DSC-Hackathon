import React from 'react'
import MapSamp from '../static/map.png';
import Pin from '../static/map-pin.svg';

const ShopLocation = (props) => {
    return (
      <div>
          <div className='row align-self-center'>
          <img src = {Pin} className='social-icon'/>
          <p>Address Here</p>
          </div>
          <img src = {MapSamp} />
      </div>

    )
}

export default ShopLocation
