import React from 'react'
import Chart from 'react-apexcharts'

const EngineSpeedPercent = ({ data }) => {
  const series = [
    {
      name: 'Engine Speed(SPN_190)',
      type: 'column',
      data: data.SPN_190
    },
    {
      name: 'Engine Percent Load At Current Speed(SPN_92)',
      type: 'line',
      data: data.SPN_92
    }
  ]

  const options = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false // Hide the download menu buttons
      }
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'Engine Speed and Engine Percent Load',
      align: 'center'
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    xaxis: {
      categories: [0, 1, 2, 3, 4, 5], // Numeric categories
      labels: {
        formatter: function (val) {
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          return months[val] // Display the month name corresponding to the category
        }
      },
      title: {
        text: 'Month'
      }
    },
    yaxis: [
      {
        title: {
          text: 'Engine Speed(SPN_190)'
        }
      },
      {
        opposite: true,
        title: {
          text: 'Engine Percent Load(SPN_92)'
        }
      }
    ]
  }
  return (
    <div id='chart'>
      <Chart options={options} series={series} type='line' height={350} />
    </div>
  )
}

export default EngineSpeedPercent
