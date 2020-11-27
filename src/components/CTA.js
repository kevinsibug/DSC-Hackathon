import React from 'react'

import Logo from '../static/Placeholder_Logo.png'
import Search from '../components/Search'

const CTA = () => {
    return (
        <div>
            <img src = {Logo}>
            </img>
            <h1>TindaJuan</h1>
            <p>small businesses bridged to every Juan</p>
            <Search />
        </div>
    )
}

export default CTA
