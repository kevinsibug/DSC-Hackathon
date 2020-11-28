import React from 'react'
import Facebook from '../static/facebook.png'
import Twitter from '../static/twitter.png'
import Mail from '../static/mail.png'

const Footer = () => {
    return (
        <footer>
          <div>
            <h5>Shops</h5>
              <p>Food</p>
              <p>Arts & Crafts</p>
              <p>Clothes</p>
              <p>Gardening</p>
              <p>Services</p>
              <p>Others</p>
          </div>
          <div>
            <h5>About Us</h5>
          </div>
          <div>
            <h5>FAQs</h5>
          </div>
          <div className='socials'>
            <div>
            <img src = {Facebook} />
            <p>TindaJuan</p>
            </div>
            <div>
            <img src = {Twitter} />
            <p>@tindajuan</p>
            </div>
            <div>
            <img src = {Mail} />
            <p>tindajuan@gmail.com</p>
            </div>
          </div>
          <div className = "footer-logo">
              TindaJuan
          </div>
        </footer>

    )
}

export default Footer
