import React from 'react'
import Subscribe from '../components/Subscribe';
import BoxSubheader from '../components/BoxSubheader';

const BoxBanner = () => {
    return (
        <div className='box-banner'>
            <BoxSubheader title={'Know what’s trending on TindaJuan'}
              desc={'Subscribe to our newsletter to get the latest updates from services, shops, and more! '}/>
            <Subscribe />
        </div>
    )
}

export default BoxBanner