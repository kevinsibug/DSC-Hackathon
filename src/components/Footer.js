import React from 'react'
import Facebook from '../static/facebook.svg'
import Twitter from '../static/twitter.svg'
import Mail from '../static/mail.svg'

const Footer = () => {
    return (
        <footer>
        <div className='container'>
          <div className='row'>
          <div className='col'>
            <h5><a href='/' className='links'>Shops</a></h5>
              <p className='footer-indent'><a href='/' className='links'> Food</a></p>
              <p className='footer-indent'><a href='/' className='links'>Arts & Crafts</a></p>
              <p className='footer-indent'><a href='/' className='links'>Clothes</a></p>
              <p className='footer-indent'><a href='/' className='links'>Gardening</a></p>
              <p className='footer-indent'><a href='/' className='links'>Services</a></p>
              <p className='footer-indent'><a href='/' className='links'>Others</a></p>
          </div>
          <div className='col'>
            <h5><a href='/' className='links'>About Us</a></h5>
          </div>
          <div className='col'>
            <h5><a href='/' className='links'>FAQs</a></h5>
          </div>
          <div className='socials col'>
            <div className='row'>
              <img src = {Facebook} className='social-icon'/>
              <p>TindaJuan</p>
            </div>
            <div className='row'>
              <img src = {Twitter} className='social-icon'/>
              <p>@tindajuan</p>
            </div>
            <div className='row'>
              <img src = {Mail} className='social-icon'/>
              <p>tindajuan@gmail.com</p>
            </div>
            <div className = "footer-logo row">
                <a href='/' className='links'>TindaJuan</a>
            </div>
          </div>

          <div>

          </div>
          </div>

            <br />
            <div className='d-flex justify-content-center'>
            <p>Copyright © 2020. All Rights Reserved.</p>
            </div>
            <br />
          </div>
        </footer>

    )
}

export default Footer
