import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
const Genres = (props) => {
  const { selectedGenres, setSelectedGenres, genres, setGenres, setPage } = props;

  const fetchgenre = async () => {
    let url =
      `https://api.themoviedb.org/3/genre/movie/list?api_key=7cb8fc13c27dd673bb167485b866d940&language=en-US`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    setGenres(parsedData.genres);
  };
  useEffect(() => {
    fetchgenre();
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(
        selectedGenres.filter((selected)=> selected.id !==genre.id)
    );
    setGenres([...genres,genre])
    setPage(1);
  };
  return (
    
    <div style={{ padding: "6px 0" }}>
        
        {selectedGenres &&
        selectedGenres.map((genre) => {
          return (
            <Chip
              label={genre.name}
              style={{ margin: 2 }}
              color="primary"
              size="small"
              key={genre.id}
              clickable
             onDelete={()=>handleRemove(genre)}
            />
          );
        })}
      {genres &&
        genres.map((genre) => {
          return (
            <Chip
              label={genre.name}
              style={{ margin: 2 }}
            color="secondary"
              size="small"
              key={genre.id}
              clickable
              onClick={()=>handleAdd(genre)}
            />
          );
        })}
        
    </div>
  );
};

export default Genres;
