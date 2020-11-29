import React from 'react'
import MapSamp from '../static/map.png';
import Pin from '../static/map-pin.svg';

const ShopLocation = (props) => {
    return (
      <div>
          <div className='row align-self-center'>
          <img src = {Pin} className='social-icon'/>
          <p>123 Sampaguita Street, Clarkview, Angeles City, Pampanga</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.283065802216!2d121.07630521537364!3d14.6398665800368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b77fd9e304c9%3A0x61ad426d7c6cce9e!2sAteneo%20de%20Manila%20University!5e0!3m2!1sen!2sph!4v1606610278476!5m2!1sen!2sph" width="1200" height="450" frameborder="0" style= {{border:0, marginLeft: 'auto', marginRight: 'auto' }}allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  
      </div>

    )
}

export default ShopLocation
