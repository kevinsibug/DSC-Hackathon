import React from 'react'
import Tag from '../static/tag.svg'


const Vouchers = (props) => {
    return (
        <div className='row'>
          <div className='card'>
            <div className= 'row'>
              <div className='col-8'>
                  <div className  = "row voucher-row">
                    <img src = {Tag} className='voucher-icon align-bottom' />
                      <p className='voucher-title'>Php 50 off</p>
                      <p className='voucher-desc'> on your first purchase</p>
                      <p className='voucher-date'> Valid until Dec. 31, 2020</p>
                  </div>
                </div>
              <div className='col-4'>
                <input className = "claim-button float-right" type="Submit" value="SEARCH"></input>
            </div>
          </div>
          </div>
          <div className='card'>
            <div className= 'row'>
            <div className='col-8'>
                <div className  = "row voucher-row">
                  <img src = {Tag} className='voucher-icon align-bottom' />
                    <p className='voucher-title'>Php 50 off</p>
                    <p className='voucher-desc'> on your first purchase</p>
                    <p className='voucher-date'> Valid until Dec. 31, 2020</p>
                </div>
              </div>
            <div className='col-4'>
              <input className = "claim-button float-right" type="Submit" value="SEARCH"></input>
          </div>
            </div>
          </div>
        </div>
    )
}

export default Vouchers
