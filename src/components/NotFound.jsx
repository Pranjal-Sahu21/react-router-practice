import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();  
  return (
    <div>
        <h1>Error-404</h1>
        <h2>Page not found</h2>
        <button onClick={() => navigate('/')} className='return-button'>Go home</button>
    </div>
  )
}

export default NotFound