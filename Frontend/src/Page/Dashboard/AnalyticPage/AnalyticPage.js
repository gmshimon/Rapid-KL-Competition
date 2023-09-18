import React, { useEffect, useState } from 'react';
import LineChart from '../../../Component/Analytics/LineChart';
import AirPressure from '../../../Component/Analytics/AirPressure/AirPressure';
import CoolantTemp from '../../../Component/Analytics/CoolantTemp/CoolantTemp';
import TotalFuelUsed from '../../../Component/Analytics/TotalFuelUsed/TotalFuelUsed';
import AnalyticHeader from '../../../Component/Analytics/AnalyticHeader/AnalyticHeader';

const AnalyticPage = ({ id, data }) => {
  const [busData, setData] = useState(data);

  useEffect(() => {
    fetch('/Bus_data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data[id]);
        console.log(data[id]);
      });
  }, []);

  return (
    <div>
      <AnalyticHeader data={busData} />
      <div className="row">
        <div className="col-6">
          <LineChart data={busData} />
        </div>
        <div className="col-6">
          <AirPressure data={busData} />
        </div>
        <div className="col-6">
          <CoolantTemp data={busData} />
        </div>
        <div className="col-6">
          <TotalFuelUsed data={busData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticPage;
