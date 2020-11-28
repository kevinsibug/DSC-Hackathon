import React from 'react'

const Subheader = (props) => {
    return (
        <div className='row'>
          <div>
            <h2 className='subheader'>{props.title}</h2>
          </div>
          <div>
            <p  className='subheader-desc'>{props.desc}</p>
          </div>
        </div>
    )
}

export default Subheader
