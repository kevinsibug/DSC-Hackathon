import React from 'react'

const Subheader = (props) => {
    return (
        <div>
          <div className='subheader'>
          <h2>{props.title}</h2>
          </div>
          <div className='subheader-desc'>
          {props.desc}
          </div>
        </div>
    )
}

export default Subheader
