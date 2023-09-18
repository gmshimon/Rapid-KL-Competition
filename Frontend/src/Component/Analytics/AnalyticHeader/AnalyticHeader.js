import React from 'react'
import Card from 'react-bootstrap/Card'

const AnalyticHeader = ({ data }) => {
  return (
    <section>
      <h6 style={{ textAlign: 'center', fontSize: '25px' }}>Dashboard</h6>
      <div className='row'>
        <div class='col-3'>
          <div class='card bg-customer text-white'>
            <div class='card-body'>
              <h5 class='card-title'>Bus id</h5>
              <p class='card-text'>{data.bus_id}</p>
            </div>
          </div>
        </div>

        <div class='col-3'>
          <div class='card bg-mechanic text-white'>
            <div class='card-body'>
              <h5 class='card-title'>Depot id</h5>
              <p class='card-text'>{data.depot_id}</p>
            </div>
          </div>
        </div>
        <div class='col-3'>
          <div class='card bg-enquiry text-white'>
            <div class='card-body'>
              <h5 class='card-title'>Depot NM</h5>
              <p class='card-text'>{data.depot_nm}</p>
            </div>
          </div>
        </div>
        <div class='col-3'>
          <div class='card bg-feedback text-white'>
            <div class='card-body'>
              <h5 class='card-title'>Model Num</h5>
              <p class='card-text'>{data.model_num}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnalyticHeader
