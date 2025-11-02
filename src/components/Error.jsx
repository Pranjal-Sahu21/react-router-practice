import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <h3>An error occured</h3>
      <p>{error.message}</p>
      <button className="error-button" onClick={() => navigate('/')}>Go home</button>
    </div>
  );
};

export default Error;
