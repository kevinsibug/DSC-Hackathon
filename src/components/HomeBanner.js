import React from 'react'

import HomeNav from '../components/HomeNav'
import CTA from '../components/CTA'

const HomeBanner = (props) => {
    return (
        <div className='home-banner'>
            <HomeNav />
            <CTA {...props} />
        </div>
    )
}

export default HomeBanner
