import React from 'react'

export const CustomTable = ({ data }) => {
  console.log(data, 'FFF')
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Ad Network</th>
            <th scope="col">App</th>
            <th scope="col">Country</th>
            <th scope="col">Daily Users</th>
            <th scope="col">Date</th>
            <th scope="col">Platform</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((i, idx) => (
            <tr>
              <th scope="row">{i['Ad Network']}</th>
              <td>{i['App']}</td>
              <td>{i['Country']}</td>
              <td>{i['Daily Users']}</td>
              <td>{i['Date']}</td>
              <td>{i['Platform']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomTable
