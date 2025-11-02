import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  return (
    <div className="job-details-container">
      <p>
        <b>Job details: </b>
        {jobDetails.title}
      </p>
      <p>
        <b>Salary: </b>
        {jobDetails.salary}
      </p>
      <p>
        <b>Job location: </b>
        {jobDetails.location}
      </p>
      <p>
        <b>Job description: </b>
        {jobDetails.description}
      </p>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/jobs/${id}`);
  if(!res.ok) throw Error('Could not find the job details');
  return res.json();
};
