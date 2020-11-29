import React from 'react'

const FaqSubheader = (props) => {
    return (
        <div>
          <div>
            <h2 className='faqsubheader'>{props.title}</h2>
          </div>
          <div>
              <br></br>
            <h5  className='faqsubheader-desc'>{props.desc}</h5>
            <p  className='faqsubheader-desc-desc'>{props.sec}</p>
            <hr></hr>
          </div>
        </div>
    )
}

export default FaqSubheader