import React, { useEffect, useState } from 'react'
import LineChart from '../../../Component/Analytics/LineChart'
import CoolantTemp from '../../../Component/Analytics/CoolantTemp/CoolantTemp'
import TotalFuelUsed from '../../../Component/Analytics/TotalFuelUsed/TotalFuelUsed'
import AnalyticHeader from '../../../Component/Analytics/AnalyticHeader/AnalyticHeader'
import EngineSpeedPercent from '../../../Component/Analytics/EngineSpeedPercent/EngineSpeedPercent'
import EngineTorque from '../../../Component/Analytics/EngineTorque/EngineTorque'
import TotalHoursOpt from '../../../Component/Analytics/TotalHoursOpt/TotalHoursOpt'
import FuelRate from '../../../Component/Analytics/FuelRate/FuelRate'

const AnalyticPage = ({ id, data }) => {
  const [busData, setData] = useState(data)

  useEffect(() => {
    fetch('/Bus_data.json')
      .then(res => res.json())
      .then(data => {
        setData(data[id])
        console.log(data[id])
      })
  }, [])

  return (
    <div>
      <AnalyticHeader data={busData} />
      <div className='row'>
        <div className='col-4 col-md-6'>
          <LineChart data={busData} />
        </div>
        <div className='col-4 col-md-6'>
          <EngineSpeedPercent data={busData} />
        </div>
        <div className='col-4 col-md-6'>
          <CoolantTemp data={busData} />
        </div>
        <div className='col-4 col-md-6'>
          <TotalFuelUsed data={busData} />
        </div>
        <div className='col-4 col-md-6'>
          <TotalHoursOpt data={busData} />
        </div>
        <div className='col-4 col-md-6'>
          <FuelRate data={busData} />
        </div>
      </div>
    </div>
  )
}

export default AnalyticPage
