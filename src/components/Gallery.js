import React from 'react'
import image1 from '../static/image-1.png';
import image2 from '../static/image-2.png';
import image3 from '../static/image-3.png';
import SearchNav from '../components/SearchNav';


const Gallery = (props) => {
    return (
      <div>
        <SearchNav />
          <div className='row'>
          <div className='col-7'>
            <img src = {image1} />
          </div>

          <div className='col-3'>
            <div className='row'>
              <img src = {image2} />
            </div>
            <div className='row'>
              <img src = {image3} />
            </div>
          </div>
          </div>
          </div>
    )
}

export default Gallery
