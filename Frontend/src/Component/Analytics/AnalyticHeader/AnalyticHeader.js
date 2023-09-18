import React from 'react';
import Card from 'react-bootstrap/Card';

const AnalyticHeader = ({ data }) => {
  return (
    <section>
      <div className="row">
        <div className="col-3">
          <div className="card bg-customer text-white">
            <div className="card-body">
              <h5 className="card-title">Bus id</h5>
              <p className="card-text">{data.bus_id}</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card bg-mechanic text-white">
            <div className="card-body">
              <h5 className="card-title">Depot id</h5>
              <p className="card-text">{data.depot_id}</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card bg-enquiry text-white">
            <div className="card-body">
              <h5 className="card-title">Depot NM</h5>
              <p className="card-text">{data.depot_nm}</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card bg-feedback text-white">
            <div className="card-body">
              <h5 className="card-title">Model Num</h5>
              <p className="card-text">{data.model_num}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticHeader;
