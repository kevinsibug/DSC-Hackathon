import React from 'react'
import SignUp from '../components/SignUp'

const Banner = (props) => {
    return (
        <div>
          <div>
          <h3 className='banner'>{props.title}</h3>
          </div>
          <div className='banner-desc'>
          {props.desc}
          </div>
          <SignUp />
        </div>

    )
}

export default Banner
