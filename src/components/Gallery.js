import React from 'react'
import image1 from '../static/image-1.png';
import image2 from '../static/image-2.png';
import image3 from '../static/image-3.png';
import SearchNav from '../components/SearchNav';


const Gallery = (props) => {
    return (
      <div>
          <div className='gallery'>
          <div className='gallery-main'>
            <img src = {image1} />
          </div>

          <div className='gallery-right'>
            <div className='gallery-right-item'>
              <img src = {image2} />
            </div>
            <div className='gallery-right-item'>
              <img src = {image3} />
            </div>
          </div>
          </div>
          </div>
    )
}

export default Gallery
