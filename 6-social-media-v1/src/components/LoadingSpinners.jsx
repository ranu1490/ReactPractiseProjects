import React from 'react'

export const LoadingSpinners = () => {
  return (
    <div className="text-center">
    <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem", marginTop: "100px"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}
