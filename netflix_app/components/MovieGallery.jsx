import React from 'react';
import Image from 'next/image';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieGallery = ({ movie }) => {
  const { poster_path: img } = movie;
  return (
    <div className="flex flex-row">
      <Image src={`${baseUrl}${img}`} alt="movies" width={300} height={200} />
    </div>
  );
};

export default MovieGallery;
