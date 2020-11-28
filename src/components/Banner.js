import React from 'react'
import SignUp from '../components/SignUp'

const Banner = (props) => {
    return (
        <div className='banner-photo'>
        <div className='d-flex justify-content-around'>
          <div className='col'>
            <h3 className='banner'>{props.title}</h3>
          </div>
          <div className='col'>
            <p className='banner-desc'>{props.desc}</p>
            <SignUp />
          </div>

          </div>
        </div>

    )
}

export default Banner
