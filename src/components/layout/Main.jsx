import React, {Component, useEffect, useState} from 'react';
import Movies from "../Movies";
import Preloader from "../Preloader";
import Search from "../Search";

const API_KEY = process.env.REACT_APP_APIKEY

const Main = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const searchMovies = (str, type) => {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`)
        .then(respone => respone.json())
        .then(data => {
          setMovies(data.Search)
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
          console.error(err)
        })
  }

  useEffect(() =>
          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
              .then(respone => respone.json())
              .then(data => {
                setMovies(data.Search)
                setLoading(false)
              })
              .catch(err => {
                setLoading(false)
                console.error(err)
              })
      , [])

  return (
      <main>
        <Search searchMovies={searchMovies}/>
        {
          loading
              ?
              (<Preloader/>)

              :
              (
                  <Movies movies={movies}/>
              )

        }

      </main>
  );
}

export default Main;