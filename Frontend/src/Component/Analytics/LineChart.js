import React from 'react'
import Chart from 'react-apexcharts'

const LineChart = ({ data }) => {
  const series = [
    {
      name: 'Fuel Level 1',
      data: data.SPN_96
    }
  ]
  const options = {
    colors: ['#00FF11', '#FB0202'],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 5
    },
    title: {
      text: 'Total Fuel Level 1',
      align: 'center'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['April', 'February', 'January', 'June', 'March', 'May'], // takes an array which will be repeated on columns
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Fuel Level 1'
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  }

  return (
    <div id='chart'>
      <Chart options={options} series={series} type='line' height={350} />
    </div>
  )
}

export default LineChart