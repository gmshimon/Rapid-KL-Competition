import React from 'react'
import Chart from 'react-apexcharts'

const EngineTorque = ({ data }) => {
  console.log(data.SPN_513)
  const series = data.SPN_513
  const options = {
    chart: {
      width: 380,
      type: 'pie'
    },
    // labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  }
  return (
    <div id='chart'>
      <Chart options={options} series={series} type='pie' height={350} />
    </div>
  )
}

export default EngineTorque
