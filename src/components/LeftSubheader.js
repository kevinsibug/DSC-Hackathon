import React from 'react'

const Subheader = (props) => {
    return (
        <div>
          <div>
            <h2 className='leftsubheader'>{props.title}</h2>
          </div>
          <div>
            <p  className='leftsubheader-desc'>{props.desc}</p>
          </div>
        </div>
    )
}

export default Subheader
