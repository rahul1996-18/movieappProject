import React from 'react'

const MovieList = (props) => {
    const {poster_path,title,release_date,vote_average}=props

  return (
    <div className="flex justify-center mt-20  ">
  <div className="rounded-lg shadow-lg bg-black max-w-sm border border-1 border-red-600">
    <a href="#!">
      <img className="rounded-t-lg w-[220px] h-[160px]" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
     
    </a>
    <div className="p-2 my-3">
      <h5 className="text-white text-xl font-medium mb-2 text-center">{title}</h5>
      <h6 className="text-white text-xl font-medium mb-2 text-center">Release Date:{release_date}</h6>
      <h6 className='text-yellow-500 text-lg font-medium mb-2 '>tmdb:{vote_average}/10</h6>
     
     
    </div>
  </div>
</div>
  )
}

export default MovieList
