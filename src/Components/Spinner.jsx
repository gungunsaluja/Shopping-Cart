import React from 'react'
import "./Spinner.css";
const Spinner = () => {
  return (
    <div>
        <div className = 'h-screen flex flex-col gap-5 items-center justify-center '>
          <div className='spinner'></div>
          <p>Loading...</p>

        </div>
      
    </div>
  )
}

export default Spinner
