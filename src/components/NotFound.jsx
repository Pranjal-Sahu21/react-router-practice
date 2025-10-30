import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();  
  return (
    <div>
        <h1>Error-404</h1>
        <h2>Not Found</h2>
        <h4>Sorry, this page does not exist</h4>
        <button onClick={() => navigate('/')} className='return-button'>Go home</button>
    </div>
  )
}

export default NotFound