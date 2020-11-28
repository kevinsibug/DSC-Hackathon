import React from 'react'

import Header from '../components/Header'
import CTA from '../components/CTA'
import Subheader from '../components/Subheader'
const Home = () => {
    return (
        <div>
            <Header />
            <CTA />
            <Subheader title={'Featured Shops'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
            <Subheader title={'Categories'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
            <Subheader title={'Partner Shops'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
        </div>
    )
}

export default Home
