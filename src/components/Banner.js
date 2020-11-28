import React from 'react'

const Banner = (props) => {
    return (
        <div>
          <div>
          <h3 className='banner'>{props.title}</h3>
          </div>
          <div className='banner-desc'>
          {props.desc}
          </div>
        </div>
    )
}

export default Banner
