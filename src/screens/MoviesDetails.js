import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainWrapper from '../components/MainWrapper'
import { useFetchMovie } from '../hooks'
import urls from '../apis/urls'
import Loading from '../components/Loading'
import MovieDetailsComponents from '../components/MovieDetailsComponents'
import { fetchMovies } from '../apis/movie'

const MoviesDetails = ({ route }) => {
  const { movie_id } = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState({});


  useEffect(() => {
      fetchMovies(urls.movieDetails+movie_id)
      .then(data => {
          setLoading(false)
          setDetails(data)
      }).catch((e) => {
          setLoading(false)
          setError(e.message)
      })
  }, []);

  return (
    <MainWrapper back={true}>
      {loading && <Loading />}
      {!loading && error == '' ? <MovieDetailsComponents details={details} /> : null}
    </MainWrapper>
  )
}

export default MoviesDetails