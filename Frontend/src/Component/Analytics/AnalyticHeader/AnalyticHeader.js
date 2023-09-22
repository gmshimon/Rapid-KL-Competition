import React from 'react';
import Card from 'react-bootstrap/Card';

const AnalyticHeader = ({ data }) => {
  let color;
  if (data)
    return (
      <section>
        <div
          style={{
            width: '30px',
            textAlign: 'center',
            borderRadius: '5px',
            backgroundColor:
              (data.Grade === 0 && '#D1E7DD') ||
              (data.Grade === 1 && '#FFF3CD') ||
              (data.Grade === 2 && '#F8D7DA'),
          }}
        >
          {(data.Grade === 0 && 'A') ||
            (data.Grade === 1 && 'B') ||
            (data.Grade === 2 && 'C')}
        </div>
        <div className="row">
          <div className="col col-3 col-m-6 col-sm-6">
            <div className="card bg-customer text-white">
              <div className="card-body">
                <h5 className="card-title">Bus id</h5>
                <p className="card-text">{data.bus_id}</p>
              </div>
            </div>
          </div>

          <div className="col col-3 col-m-6 col-sm-6">
            <div className="card bg-mechanic text-white">
              <div className="card-body">
                <h5 className="card-title">Depot id</h5>
                <p className="card-text">{data.depot_id}</p>
              </div>
            </div>
          </div>
          <div className="col col-3 col-m-6 col-sm-6">
            <div className="card bg-enquiry text-white">
              <div className="card-body">
                <h5 className="card-title">Depot NM</h5>
                <p className="card-text">{data.depot_nm}</p>
              </div>
            </div>
          </div>
          <div className="col col-3 col-m-6 col-sm-6">
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
