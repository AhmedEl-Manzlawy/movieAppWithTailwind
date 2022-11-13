import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} >
    <div className="w-[18rem] max-w-[100%] bg-gray-500  rounded-xl text-white text-center   m-5 flex flex-col cursor-pointer text-xl hover:scale-110">
      <img
        src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
        alt={movie.title}
        className="w-full self-center rounded-lg h-[476px]"
      />
      <h3 className="my-1">{movie.title}</h3>
      <h3 className="my-1">Rate : {movie.vote_average}⭐</h3>
    </div>
    </Link>
  );
};

export default MovieCard;
