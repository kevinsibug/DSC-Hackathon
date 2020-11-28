import React from 'react'

import Logo from '../static/tindajuan-logo.png'
import Search from '../components/Search'

const CTA = (props) => {
    return (
        <div>
            <img src = {Logo} className='logo-illus'>
            </img>
            <div className  = "home-logo">
                TindaJuan
            </div>
            <p className='tagline'>small businesses bridged to every Juan</p>
            <Search {...props} />
        </div>
    )
}

export default CTA
