import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import MovieGallery from './MovieGallery';

const popularURL =
  'https://api.themoviedb.org/3/movie/popular?api_key=be58c092cf553e34a0ec09c347ff66b0';

const test = 'this is just a git Commit teste!';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios(popularURL);
      const data = response.data;
      const popularMovie = data.results;
      setMovies(popularMovie);
      console.log(movies);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie, index) => {
        return <MovieGallery key={index} movie={movie} />;
      })}
    </div>
  );
};

export default Movies;
