import React from 'react';
import LogoNav from '../static/tindajuan-logo-brown.png';
import Chevron from '../static/chevron-down-brown.svg';

const Header = () => {
    return (
        <header className='row'>
          <div className='col'>
            <div className  = "logo">
            <a href='/' className='logo-home'>
              <img src = {LogoNav} class='logo-nav' />
                TindaJuan
          </a>
            </div>

            </div>
            <div className='col'>
            <nav className='sub-nav'>
                <ul className = 'sub-navbar'>
                <div className='row'>
                  <div className='col text-right'>
                    <li><a href='/shops' className='navbar-items'>Shops</a><a><img src = {Chevron} className='social-icon'/></a></li>
                  </div>
                  <div className='col text-right'>
                    <li><a href='/actual-shop' className='navbar-items'>About Us</a></li>
                  </div>
                  <div className='col text-right'>
                    <li><a href='/shops'className='navbar-items'>FAQs</a></li>
                  </div>
                  </div>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header
