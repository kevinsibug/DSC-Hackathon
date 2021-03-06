import React from 'react'
import Chevron from '../static/chevron-down.svg'

const HomeNav = () => {
    return (
          <nav className='d-flex justify-content-center'>
              <ul className = "navbar">
                  <li><a href='/shops'>Shops</a><a><img src = {Chevron} className='social-icon'/></a></li>

                  <li><a href='/aboutus'>About Us</a></li>
                  <li><a href='/faqs'>FAQs</a></li>

              </ul>
          </nav>
    )
}

export default HomeNav
