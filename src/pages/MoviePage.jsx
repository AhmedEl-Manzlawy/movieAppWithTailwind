import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingImg from "../assets/loading.gif";
import playIcon from "../assets/play.png";

async function getMovieDetails(id) {
  let res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=d751f12db3431eb3928b112310ae9364`
  );
  console.log(res.data);
  return res.data;
}

async function getMovieClips(id) {
  let res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d751f12db3431eb3928b112310ae9364`
  );
  console.log(res.data.results);
  return res.data.results;
}
function MoviePage({ movie }) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState("Loading");
  const [clips, setClips] = useState([]);
  useEffect(() => {
    getMovieDetails(id)
      .then((res) => {
        setMovieDetails(res);
        getMovieClips(id)
          .then((res) => {
            setClips(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (movieDetails === "Loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <img
          src={loadingImg}
          alt="Loading"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
    );
  } else
    return (
      <div className="bg-[#000] min-h-[100vh] text-white text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold font-iti">
        <img
          src={
            "https://image.tmdb.org/t/p/original/" + movieDetails.backdrop_path
          }
          alt={movieDetails.backdrop}
          className="w-screen aspect-video h-96 "
        />
        <div className="flex flex-col py-10 items-center justify-start md:flex-row md:ml-[50px]">
          <img
            src={
              "https://image.tmdb.org/t/p/original/" + movieDetails.poster_path
            }
            alt={movieDetails.title}
            className="rounded-xl border-green-500 border-2 max-w-[min(400px,90%)] sm:max-w-[50%]  md:h-[500px] z-10"
          />
          <h1 className="z-10 md:ml-10 text-center font-normal">
            {movieDetails.title}
          </h1>
        </div>

        {/* Clips And Trailers */}

        <div className=" mt-5 ml-5 mr-5  md:mt-10 text-xl md:text-2xl lg:text-3xl ">
          <div className="flex flex-col justify-center  items-center my-20  mt-5 md:mt-10 text-lg md:text-xl lg:text-2xl">
            <h1 className="text-black font-bold mb-10 text-4xl">Details</h1>
            <div>
              <span className=" text-[#E21E2D] font-bold mx-5  ">
                Release Date :-
              </span>
              <span className=" font-normal">{movieDetails.release_date}</span>
            </div>

            <div>
              <span className=" text-[#E21E2D] font-bold mx-5 ">Duration :-</span>
              <span className=" font-normal">
                {parseInt(movieDetails.runtime / 60)}:
                {movieDetails.runtime % 60} hr
              </span>
            </div>

            <div>
              <span className=" text-[#E21E2D] font-bold mx-5 ">Rating :-</span>
              <span className=" font-normal">{movieDetails.vote_average}</span>
            </div>
          </div>

          <span className="text-black">Clips And Trailers</span>
          <div className="flex overflow-scroll scrollbar-hide snap-x mt-5 md:mt-10">
            {clips.map((clip) => {
              return (
                <div
                  className="ml-5 hover:cursor-pointer"
                  onClick={() => {
                    window.open(`https://youtube.com/watch?v=${clip.key}`);
                  }}
                >
                  <div className="relative flex-shrink-0  border-2 border-green-600 h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl">
                    <img
                      src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg`}
                      className="absolute object-cover h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl "
                      alt="youtube thumbnail"
                    />
                    <img
                      src={playIcon}
                      alt="play icon"
                      className="absolute inset-0 w-[150px] h-[150px] m-auto"
                    />
                  </div>
                  <p className=" text-black font-extrabold text-lg md:text-xl mt-1">
                    {clip.name}
                  </p>
                </div>
              );
            })}
          </div>
          {/* overview */}
          <div className="pb-20">
            <div className="mt-5 md:mt-10 text-[#E21E2D]">OverView :- </div>
            <div className="mt-5 md:mt-10 font-normal text-lg md:text-xl lg:text-2xl">
              {movieDetails.overview}
            </div>
          </div>
        </div>
      </div>
    );
}

export default MoviePage;
