import React from 'react'
import { Bar, Line, Scatter, Pie, Doughnut, PolarArea, Radar } from 'react-chartjs-2'

const options = {
  responsive: true,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Data Visualisation'
    }
  }
}

const handleChart = (data, options, type) => {
  console.log(type)
  switch (type) {
    case 'Line':
      return <Line data={data} options={options} />
    case 'Bar':
      return <Bar data={data} options={options} />
    case 'Scatter':
      return <Scatter data={data} options={options} />
    case 'Pie':
      return <Pie data={data} options={options} />
    case 'Doughnut':
      return <Doughnut data={data} options={options} />
    case 'PolarArea':
      return <PolarArea data={data} options={options} />
    case 'Radar':
      return <Radar data={data} options={options} />
    default:
      return <Bar data={data} options={options} />
  }
}

const CustomGraph = ({ data, type }) => <>{handleChart(data, options, type)}</>

export default CustomGraph
