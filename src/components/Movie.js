import React, { useEffect, useState } from 'react'
import Genres from './Genres'
import MovieList from './MovieList'
import Spinner from './Spinner'
import useGenre from "./useGenre"
import LoadMore from './LoadMore'


const Movie = (props) => {
  const[movies,setMovies]=useState([])
  const[page,setPage]=useState(1)
  // const[noofpages,setNoofPages]=useState(0)
  const[loading,setLoading]=useState(true)
  const [selectedGenres,setSelectedGenres]=useState([])
  const[genres,setGenres]=useState([])
  const genreforURL =useGenre(selectedGenres)
  

   const fetchMovie= async()=>{
    let url=`https://api.themoviedb.org/3/discover/movie?api_key=7cb8fc13c27dd673bb167485b866d940&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&pageSize=${props.pageSize}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`
      setLoading(true)
    let data= await fetch(url)
      let parsedData =await data.json()
      console.log(parsedData)
      setMovies((movies)=>[...movies,...parsedData.results])
      // setNoofPages(parsedData.total_pages)
      setLoading(false)
   }
   useEffect(()=>{
   fetchMovie()
   },[page,genreforURL])
   
    return (
    <div>
      <Genres selectedGenres={selectedGenres}setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres}setPage={setPage}/>
       {loading && <Spinner/>} 
      
      <div className='grid grid-cols-6 gap-10 '>
        {movies.map((element)=>{
          return(
            <div className='grid  '>
              <MovieList poster_path={element.poster_path}title={element.title}release_date={element.release_date}vote_average={element.vote_average}/>
            </div>
          )
        })}
      </div>
      <LoadMore setPage={setPage}  page={page}/>
    </div>
  )
}

export default Movie
