import React from 'react'
import Chart from 'react-apexcharts'
const TotalHoursOpt = ({ data }) => {
  const series = [{ name: 'Total Hours', data: data.SPN_247 }]
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false // Hide the download menu buttons
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true
      }
    },
    colors: ['#00E396'],
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Engine Total Hours of Operation (SPN_247)',
      align: 'center'
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
  }
  return (
    <div id='chart'>
      <Chart options={options} series={series} type='bar' height={300} />
    </div>
  )
}

export default TotalHoursOpt
