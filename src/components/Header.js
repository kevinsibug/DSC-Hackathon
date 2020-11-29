import React from 'react';
import LogoNav from '../static/tindajuan-logo-brown.png';
import Chevron from '../static/chevron-down-brown.svg';

const Header = () => {
    return (

        <header className='row'>
          <div className='col'>

            <div className  = "logo">
            <a href='/' className='logo-home'>
              <img src = {LogoNav} className='logo-nav' />
                TindaJuan
          </a>
            </div>

            </div>

            <nav className='sub-nav'>
                <ul className = 'sub-navbar'>
                    <li><a href='/shops' className='navbar-items'>Shops</a><a><img src = {Chevron} className='social-icon'/></a></li>


                    <li><a href='/actual-shop' className='navbar-items'>About Us</a></li>


                    <li><a href='/shops'className='navbar-items'>FAQs</a></li>


                </ul>
            </nav>

        </header>
    )
}

export default Header
