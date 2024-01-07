import React from 'react'

const CollegeDetails = ({college}) => {
  return (
    <tr>
        <td>{college.id}</td>
        <td>{college.name}</td>
        <td>{college.est}</td>
    </tr>
  )
}

export default CollegeDetails
