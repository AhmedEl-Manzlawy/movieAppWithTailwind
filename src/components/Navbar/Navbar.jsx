import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // let APIKey ="&api_key=d751f12db3431eb3928b112310ae9364";
  // let baseUrl ="https://api.themoviedb.org/3";
  // let url = baseUrl+""+APIKey
  // let movieArr =['Popular','Theatres','Kids','Drama','Comedy'];


  // const getDataMovie = (movieType)=>{
    
  //   if(movieType ==='Popular'){
  //     url =baseUrl+"/discover/movie?sort_by=popularity.desc"+APIKey;
  //   }
  //   if(movieType ==='Theatres'){
  //     url = baseUrl+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+APIKey
  //   }
  //   if(movieType === 'Kids'){
  //     url = baseUrl+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+APIKey
  //   }
  //   if(movieType === 'Drama'){
  //     url = baseUrl+"/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"+APIKey
  //   }
  //   if(movieType === 'Comedy'){
  //     url = baseUrl+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+APIKey
  //   }
  // }

  return (

    <div>
      <nav className="bg-[#E21E2D]  px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* Logo */}
          <Link to="/">
            <div className="text-black font-bold md:text-2xl lg:text-3xl ml-20  font-aug ">
              House Of Movies
            </div>
          </Link>
          {/* Search */}
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            {/* items */}
            {/* <ul className="flex flex-col p-4 mt-4 border rounded-lg font-iti  text-black  md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-bold md:border-0 md:bg-[#E21E2D] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {
                movieArr.map((value)=>{
                  return(
                    <li>
                      <button to="#" name={value} onClick={(e)=>{
                        getDataMovie(e.target.name)
                      }} >{value}</button>
                    </li>
                  )
                })
              }
            </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
