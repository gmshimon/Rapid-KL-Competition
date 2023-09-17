import React from 'react'
import Chart from 'react-apexcharts'

const TotalFuelUsed = ({ data }) => {
  const series = [
    {
      name: 'Engine Total Fuel Used',
      data: data.SPN_250
    }
  ]
  const options = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top' // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758']
      }
    },
    title: {
      text: 'Engine Total Fuel Used',
      align: 'center'
    },
    xaxis: {
      categories: ['April', 'February', 'January', 'June', 'March', 'May'],
      position: 'bottom',
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val
        }
      }
    },
    title: {
      text: 'Monthly Engine Total Fuel Used',

      align: 'center',
      style: {
        color: '#444'
      }
    }
  }

  return (
    <div id='chart'>
      <Chart options={options} series={series} type='bar' height={300} />
    </div>
  )
}

export default TotalFuelUsed
