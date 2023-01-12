
import React from 'react'

const LoadMore = ({page,setPage}) => {
    const loadmore=()=>{
        setPage(page+1)
    }
  return (
    <div className='my-3'>
      <button className='bg-blue-500 text-white p-2 rounded-xl'onClick={loadmore}>Load More</button>
    </div>
  )
}

export default LoadMore
