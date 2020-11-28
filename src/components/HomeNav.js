import React from 'react'
import Chevron from '../static/chevron-down.svg'

const HomeNav = () => {
    return (
          <nav className='d-flex justify-content-center'>
              <ul className = "navbar">
                  <li><a href='/shops'>Shops</a><a><img src = {Chevron} className='social-icon'/></a></li>
                  <li><a href='/shops'>About Us</a></li>
                  <li><a href='/shops'>FAQs</a></li>
              </ul>
          </nav>
    )
}

export default HomeNav
