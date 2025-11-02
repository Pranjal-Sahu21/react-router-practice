import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h1 style={{fontSize:"40px"}}>Job openings</h1>
        <Outlet/>
    </div>
  )
}

export default JobsLayout