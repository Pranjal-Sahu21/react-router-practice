import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
    const jobsData = useLoaderData();
  return (
    <div className="jobs-container">
        <div className="jobs-grid">
            {jobsData.map((job)=>{
                return <Link key={job.id} to={`/jobs/${job.id}`} className="job-card">
                    <h4>{job.title}</h4>
                    <p>{job.location}</p>
                </Link>
            })}
        </div>
    </div>
  )
}

export default Jobs

export const jobsLoader = async () => {
    const res = await fetch("http://localhost:5000/jobs")
    return res.json();
}