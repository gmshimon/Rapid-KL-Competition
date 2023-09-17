import React from 'react'
import Chart from 'react-apexcharts'

const AirPressure = ({ data }) => {
  const series = [
    {
      name: 'Service Brake Circuit 1 Air Pressure',
      data: data.SPN_1087
    },
    {
      name: 'Service Brake Circuit 2 Air Pressure',
      data: data.SPN_1088
    }
  ]
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Service Brake Circuit Air Pressure',
      align: 'center'
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['April', 'February', 'January', 'June', 'March', 'May']
    },
    yaxis: {
      title: {
        text: 'Pressure'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return +val + ' pressure'
        }
      }
    }
  }
  return (
    <div id='chart'>
      <Chart options={options} series={series} type='bar' height={350} />
    </div>
  )
}

export default AirPressure
