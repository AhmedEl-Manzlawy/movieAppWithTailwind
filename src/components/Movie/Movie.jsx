import axios from "axios";
import React, { useEffect, useState } from "react";
import loadingImg from "../../assets/loading.gif";
import MovieCard from "./MovieCard";

async function getMovie(pageNo) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=d751f12db3431eb3928b112310ae9364&page=${pageNo}`
  );
  console.log(res.data.results);
  return res.data.results;
}

const Movie = () => {
  const [movie, setMovie] = useState("Loading");
  const [pageNo, setPagNo] = useState(1);
  useEffect(() => {
    getMovie(pageNo)
      .then((res) => setMovie(res))
      .catch((err) => console.log(err));
  }, [pageNo]);

  if (movie === "Loading")
    return (
      <div className="flex items-center justify-center h-screen bg-gray">
        <img
          src={loadingImg}
          alt="Loading"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
    );
  else
    return (
      <div className="bg-gray-600 min-h-screen py-5 flex flex-col justify-center items-center ">
        <div className="w-[250px] mt-5 pb-1 font-bold ">
          <button
            className="bg-white rounded-full px-4 ml-2 mx-2"
            onClick={() => {
              if (pageNo > 1) 
              setPagNo(pageNo - 1);
              console.log("prev");
            }}
          >
            Prev{" "}
          </button>
          {pageNo}
          <button
            className="bg-white rounded-full px-4 ml-2 mx-2"
            onClick={() => {
              if (pageNo < 20) 
              setPagNo(pageNo + 1);
              console.log("next");
            }}
          >
            next
          </button>
        </div>

        <div className="flex flex-wrap justify-evenly my-4">
          {movie.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>


        <div className="w-[250px] mt-5 pb-1 font-bold ">
          <button
            className="bg-white rounded-full px-4 ml-2 mx-2"
            onClick={() => {
              if (pageNo > 1) 
              setPagNo(pageNo - 1);
              console.log("prev");
            }}
          >
            Prev{" "}
          </button>
          {pageNo}
          <button
            className="bg-white rounded-full px-4 ml-2 mx-2"
            onClick={() => {
              if (pageNo < 20) 
              setPagNo(pageNo + 1);
              console.log("next");
            }}
          >
            next
          </button>
        </div>
      </div>
    );
};

export default Movie;
