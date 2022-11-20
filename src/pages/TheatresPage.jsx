import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import loadingImg from "../assets/loading.gif";
import MovieCard from "../components/Movie/MovieCard";

async function getMovie(pageNo) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=d751f12db3431eb3928b112310ae9364&api_key=d751f12db3431eb3928b112310ae9364&page=${pageNo}`
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
      <div className="bg-[#000] min-h-screen py-5 flex flex-col justify-center items-center font-iti ">
        <div className="flex flex-col p-4 mt-4 border border-black sm:flex-col md:text-black xs:text-black rounded-lg font-iti md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-bold md:border-0">
          <NavLink
            to="/"
            className="border rounded-xl shadow-md px-3  my-1 bg-[#E21E2D] sm:bd-[#E21D2E] xs:bg-[#E21D2E]"
          >
            Popular
          </NavLink>
          <NavLink
            to="/theatres"
            className="border rounded-xl shadow-md px-3 my-1  bg-[#E21E2D] sm:bd-[#E21D2E] xs:bg-[#E21D2E]"
          >
            Theatres
          </NavLink>
          <NavLink
            to="/kids"
            className="border rounded-xl shadow-md px-3 my-1  bg-[#E21E2D] sm:bd-[#E21D2E] xs:bg-[#E21D2E]"
          >
            Kids
          </NavLink>
          <NavLink
            to="/drama"
            className="border rounded-xl shadow-md px-3 my-1  bg-[#E21E2D] sm:bd-[#E21D2E] xs:bg-[#E21D2E]"
          >
            Drama
          </NavLink>
          <NavLink
            to="comedy"
            className="border rounded-xl shadow-md px-3 my-1  bg-[#E21E2D] sm:bd-[#E21D2E] xs:bg-[#E21D2E]"
          >
            Comedy
          </NavLink>
        </div>
        <div className="w-[250px] mt-5 pb-1 font-bold flex justify-center items-center ">
          <button
            className="bg-[#E21E2D] rounded-full px-4 ml-2 mx-2 w-36"
            onClick={() => {
              if (pageNo > 1) setPagNo(pageNo - 1);
              console.log("prev");
            }}
          >
            Prev
          </button>
          <span className="w-20 flex justify-center items-center text-[#E21E2D]">
            {pageNo}
          </span>
          <button
            className="bg-[#E21E2D] rounded-full px-4 ml-2 mx-2 w-36"
            onClick={() => {
              if (pageNo < 20) setPagNo(pageNo + 1);
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

        <div className="w-[250px] mt-5 pb-1 font-bold flex justify-center items-center">
          <button
            className="bg-[#E21E2D] rounded-full px-4 ml-2 mx-2 w-36"
            onClick={() => {
              if (pageNo > 1) setPagNo(pageNo - 1);
              console.log("prev");
            }}
          >
            Prev
          </button>
          <span className="w-20 flex justify-center items-center text-[#E21E2D]">
            {pageNo}
          </span>
          <button
            className="bg-[#E21E2D] rounded-full px-4 ml-2 mx-2 w-36"
            onClick={() => {
              if (pageNo < 20) setPagNo(pageNo + 1);
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
