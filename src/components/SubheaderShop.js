import React from 'react'

const SubheaderShop = (props) => {
    return (
        <div>
          <div>
            <h2 className='subheader-shop'>{props.title}</h2>
          </div>
          <div>
            <p  className='subheader-desc-shop'>{props.desc}</p>
          </div>
        </div>
    )
}

export default SubheaderShop
