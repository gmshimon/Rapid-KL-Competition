import React, { useEffect, useState } from 'react'
import LineChart from '../../../Component/Analytics/LineChart'
import { useParams } from 'react-router-dom'
import AirPressure from '../../../Component/Analytics/AirPressure/AirPressure'
import CoolantTemp from '../../../Component/Analytics/CoolantTemp/CoolantTemp'
import TotalFuelUsed from '../../../Component/Analytics/TotalFuelUsed/TotalFuelUsed'

const AnalyticPage = () => {
  const { id } = useParams()
  const [busData, setData] = useState([])
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
      <LineChart data={busData} />
      <AirPressure data={busData} />
      <CoolantTemp data={busData} />
      <TotalFuelUsed data={busData} />
    </div>
  )
}

export default AnalyticPage
