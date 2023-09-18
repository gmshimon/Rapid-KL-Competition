import React from 'react'
import Chart from 'react-apexcharts'
const FuelRate = ({ data }) => {
  const series = [
    {
      name: 'XYZ MOTORS',
      data: data.SPN_183
    }
  ]

  const options = {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        show: false // Hide the download menu buttons
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0
    },
    title: {
      text: 'Engine Fuel Rate(SPN_183)',
      align: 'center'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val
        }
      },
      title: {
        text: 'Fuel rate'
      }
    },
    xaxis: {
      categories: [0, 1, 2, 3, 4, 5], // Numeric categories
      labels: {
        formatter: function (val) {
          const months = ['Apr', 'Feb', 'Jan', 'Jun', 'Mar', 'May']
          return months[val] // Display the month name corresponding to the category
        }
      },
      title: {
        text: 'Month'
      }
    },
    tooltip: {
      shared: true,
      y: {
        formatter: function (val) {
          return val
        }
      }
    }
  }
  return (
    <div id='chart'>
      <Chart options={options} series={series} type='area' height={300} />
    </div>
  )
}

export default FuelRate
