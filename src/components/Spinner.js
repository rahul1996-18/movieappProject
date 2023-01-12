import React from 'react'
import loading from './loading.gif'
const spinner = () => {
  return (
    <div className='flex justify-center items-center'>
        <img className="my-3 bg-white"src={loading} alt="loading"/>
      
    </div>
  )
}

export default spinner
