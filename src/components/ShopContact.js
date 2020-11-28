import React from 'react'
import Facebook from '../static/facebook-brown.svg'
import Instagram from '../static/instagram-brown.svg'
import Mail from '../static/mail-brown.svg'
import Phone from '../static/smartphone-brown.svg'

const ShopContact = () => {
    return (
          <div className='socials row justify-content-center'>
            <div className='row'>
            <div className='row'>
              <img src = {Facebook} className='social-icon'/>
              <p className='contact-padding'>TindaJuan</p>
            </div>
            <div className='row'>
              <img src = {Instagram} className='social-icon'/>
              <p className='contact-padding'>@tindajuan</p>
            </div>
            </div>
            <div className='row'>
            <div className='row'>
              <img src = {Phone} className='social-icon'/>
              <p className='contact-padding'>TindaJuan</p>
            </div>
            <div className='row'>
              <img src = {Mail} className='social-icon'/>
              <p className='contact-paddingB'>tindajuan@gmail.com</p>
            </div>
            </div>
            </div>

    )
}

export default ShopContact
