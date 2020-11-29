import React from 'react'

const BoxSubheader = (props) => {
    return (
        <div>
          <div>
            <h2 className='boxsubheader'>{props.title}</h2>
          </div>
          <div>
            <p  className='boxsubheader-desc'>{props.desc}</p>
          </div>
        </div>
    )
}

export default BoxSubheader