import Image from 'next/image';
import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { forwardRef } from 'react';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

const Thumbnail = forwardRef(({ result }, ref) => {
  const {
    title,
    media_type,
    poster_path,
    backdrop_path,
    overview,
    original_name,
    first_air_date,
    release_date,
    vote_count,
  } = result;

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer  transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        alt={title}
        src={
          `${BASE_URL}${poster_path || backdrop_path}` ||
          `${BASE_URL}${poster_path}}`
        }
        height="1080"
        width="1920"
      />
      <div className="p2">
        <p className="truncate max-w-md">{overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {title || original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {media_type && `${media_type} •`} {release_date || first_air_date} •{' '}
          <HandThumbUpIcon className="h-4 mx-2" /> {vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
