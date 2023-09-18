import React from 'react'
import Chart from 'react-apexcharts'
const CoolantTemp = ({ data }) => {
  const series = [
    {
      name: 'Engine Coolant Temperature',
      data: data.SPN_110
    }
  ]
  const options = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false // Hide the download menu buttons
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },

    title: {
      text: 'Engine Coolant Temperature SPN_110',
      align: 'center'
    },
    labels: 'SAD',
    xaxis: {
      categories: [0, 1, 2, 3, 4, 5], // Numeric categories
      labels: {
        formatter: function (val) {
          const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June'
          ]
          return months[val] // Display the month name corresponding to the category
        }
      },
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Celcius'
      }
    },
    legend: {
      horizontalAlign: 'left'
    }
  }

  return (
    <div id='chart'>
      <Chart options={options} series={series} type='area' height={350} />
    </div>
  )
}

export default CoolantTemp
