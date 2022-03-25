import Select from 'react-select'
import Navbar from '../components/Navbar'
import dataset from '../utils/dataset'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale
} from 'chart.js'

import CustomGraph from '../components/CustomGraph'
import CustomTable from '../components/CustomTable'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PointElement,
  LineElement,
  RadialLinearScale
)

const Home = () => {
  const [chartType, setChartType] = useState({ label: 'Bar', value: 'Bar' })
  const [app, setApp] = useState(null)
  const [compare, setCompare] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [labels, setLabels] = useState(null)
  const [dataVal, setDataVal] = useState(null)
  const [tableData, setTableData] = useState(null)

  const randomRgba = () => {
    const o = Math.round,
      r = Math.random,
      s = 255
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Date vs Daily Users with filters - ${app?.value} | ${compare?.value}`,
        data: dataVal,
        backgroundColor: Array(dataVal?.length)
          .fill()
          .map(() => randomRgba()),
        borderColor: Array(dataVal?.length)
          .fill()
          .map(() => randomRgba())
      }
    ]
  }

  const [filteredOptions, setFilteredOptions] = useState(null)

  const handleSort = (e) => {
    setCompare(null)
    setApp(e)
    const filteredData = [...new Set(dataset.map((i, idx) => i[e.value]))].map((k, kdx) => ({ label: k, value: k }))
    setFilteredOptions(filteredData)
  }

  const displayGraph = () => {
    if (startDate && endDate) {
      var startDateVal = moment(startDate, 'DD/MM/YYYY')
      var endDateVal = moment(endDate, 'DD/MM/YYYY')
      const filteredDataSet = dataset.filter(
        (i, idx) =>
          moment(i['Date'], 'DD/MM/YYYY').isBetween(startDateVal, endDateVal) ||
          moment(i['Date'], 'DD/MM/YYYY').isSame(startDateVal) ||
          moment(i['Date'], 'DD/MM/YYYY').isSame(endDateVal)
      )
      const filterArr = filteredDataSet.filter((i, idx) => i[app?.value] === compare?.value)
      const labels = filterArr.map((i, idx) => i['Date'])

      let k = {}
      labels.map((i, idx) => (k[i] = 0))
      filterArr.map((x, xdx) => (k[x['Date']] = k[x['Date']] + Number(x['Daily Users'])))

      setLabels(Object.keys(k))
      setDataVal(Object.values(k))
      setTableData(filterArr)
    } else {
      const filterArr = dataset.filter((i, idx) => i[app?.value] === compare?.value)
      const labels = filterArr.map((i, idx) => i['Date'])

      let k = {}
      labels.map((i, idx) => (k[i] = 0))
      filterArr.map((x, xdx) => (k[x['Date']] = k[x['Date']] + Number(x['Daily Users'])))

      setLabels(Object.keys(k))
      setDataVal(Object.values(k))
      setTableData(filterArr)
    }
  }
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-md-10 mx-auto col-sm-6 mb-4">
          <div className="row">
            <div className="col-md-4">
              <div>
                <label htmlFor="App">Select Chart Type</label>

                <Select
                  value={chartType}
                  placeholder="Select a Chart Type"
                  className="my-3"
                  onChange={(e) => setChartType(e)}
                  options={[
                    { label: 'Bar', value: 'Bar' },
                    { label: 'Line', value: 'Line' },
                    { label: 'Scatter', value: 'Scatter' },
                    { label: 'Pie', value: 'Pie' },
                    { label: 'Doughnut', value: 'Doughnut' },
                    { label: 'PolarArea', value: 'PolarArea' },
                    { label: 'Radar', value: 'Radar' }
                  ]}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div>
                <label htmlFor="App">Select Menu</label>
                <Select
                  value={app}
                  placeholder="Sort By"
                  className="my-3"
                  onChange={(e) => handleSort(e)}
                  options={[
                    { label: 'Country', value: 'Country' },
                    { label: 'Ad Network', value: 'Ad Network' },
                    { label: 'Platform', value: 'Platform' },
                    { label: 'App', value: 'App' }
                  ]}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="App">Select Filter</label>
                <Select
                  value={compare}
                  placeholder="Select a Filter"
                  className="my-3"
                  onChange={(e) => setCompare(e)}
                  options={filteredOptions}
                />
              </div>
            </div>

            <div className="col-md-6 form-group d-flex align-items-center">
              <div>
                <label htmlFor="Start Date">Start Date</label>
                <DatePicker
                  className="form-control mb-0 shadow-none text-left"
                  placeholderText="Date"
                  minDate={
                    new Date(
                      Math.min.apply(null, [
                        ...new Set(
                          dataset
                            .filter((i, idx) => i[app?.value] === compare?.value)
                            .map((i, idx) => moment(i['Date'], 'DD/MM/YYYY'))
                        )
                      ])
                    )
                  }
                  maxDate={
                    new Date(
                      Math.max.apply(null, [
                        ...new Set(
                          dataset
                            .filter((i, idx) => i[app?.value] === compare?.value)
                            .map((i, idx) => moment(i['Date'], 'DD/MM/YYYY'))
                        )
                      ])
                    )
                  }
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <div className="ms-2">
                <label htmlFor="Start Date">End Date</label>
                <DatePicker
                  className="form-control mb-0 shadow-none text-left"
                  placeholderText="Date"
                  minDate={
                    new Date(
                      Math.min.apply(null, [
                        ...new Set(
                          dataset
                            .filter((i, idx) => i[app?.value] === compare?.value)
                            .map((i, idx) => moment(i['Date'], 'DD/MM/YYYY'))
                        )
                      ])
                    )
                  }
                  maxDate={
                    new Date(
                      Math.max.apply(null, [
                        ...new Set(
                          dataset
                            .filter((i, idx) => i[app?.value] === compare?.value)
                            .map((i, idx) => moment(i['Date'], 'DD/MM/YYYY'))
                        )
                      ])
                    )
                  }
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>

            <button className="btn btn-primary mt-3" onClick={() => displayGraph()}>
              Search
            </button>
          </div>
          <CustomGraph data={data} type={chartType.value} />
          <div class="col-md-6 mx-auto mt-2">The X-Axis contains Date and the Y-axis contains Daily users.</div>
        </div>
        <div className="col-md-10 mx-auto col-sm-12">
          <CustomTable data={tableData} />
        </div>
      </div>
    </div>
  )
}

export default Home
