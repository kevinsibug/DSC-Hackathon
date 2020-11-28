import React from 'react'
import CrownBakery from '../static/crown-bakery.png'
import LaFleur from '../static/la-fleur.png'
import ModaHome from '../static/moda-home.png'
import Ekko from '../static/ekko.png'
import CraftsPaperie from '../static/crafts-paperie.png'
import TeaChiCo from '../static/tea-chi-co.png'

const PartnerLogos = (props) => {
    return (
        <div className='partner-logos'>
          <div className='d-flex justify-content-center'>
          <img src = {CrownBakery} className='partner-logo'/>
          <img src = {LaFleur} className='partner-logo' />
          <img src = {ModaHome} className='partner-logo' />
          <img src = {Ekko} className='partner-logo-edge'/>
          </div>
          <div className='d-flex justify-content-center'>
          <img src = {CraftsPaperie} className='partner-logo'/>
          <img src = {TeaChiCo} className='partner-logo-edge'/>
          </div>
        </div>
    )
}

export default PartnerLogos
