import React from 'react'

const ShopBanner = (props) => {
    return (
        <div className='banner-photo-shop'>
        <div className='d-flex justify-content-around'>
          <div className='col'>
            <h3 className='banner'>{props.title}</h3>
          </div>
          <div className='col'>
            <p className='banner-desc'>{props.desc}</p>
          </div>

          </div>
        </div>

    )
}

export default ShopBanner
