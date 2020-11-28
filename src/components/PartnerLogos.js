import React from 'react'
import CrownBakery from '../static/crown-bakery.png'
import LaFleur from '../static/la-fleur.png'
import ModaHome from '../static/moda-home.png'
import Ekko from '../static/ekko.png'
import CraftsPaperie from '../static/crafts-paperie.png'
import TeaChiCo from '../static/tea-chi-co.png'

const PartnerLogos = (props) => {
    return (
        <div>
          <div>
          <img src = {CrownBakery} />
          <img src = {LaFleur} />
          <img src = {ModaHome} />
          <img src = {Ekko} />
          </div>
          <div>
          <img src = {CraftsPaperie} />
          <img src = {TeaChiCo} />
          </div>
        </div>
    )
}

export default PartnerLogos
