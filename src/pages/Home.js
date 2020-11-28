import React from 'react'

import HomeBanner from '../components/HomeBanner'
import Subheader from '../components/Subheader'
import Categories from '../components/Categories'
import Banner from '../components/Banner'
import PartnerLogos from '../components/PartnerLogos'
import Footer from '../components/Footer'

const Home = (props) => {

    return (

        <div>
              <HomeBanner />
              <Subheader title={'Featured Shops'}
              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
              <Subheader title={'Categories'}
              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
              <Banner title={'Share to the cause— set up your shop'}
              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
              <Subheader title={'Partner Shops'}
              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
              <PartnerLogos />
            <Footer />
        </div>
    )
}

export default Home
