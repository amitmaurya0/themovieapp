import React, { useEffect, useState } from 'react'
import MainWrapper from '../components/MainWrapper'
import urls from '../apis/urls'
import MovieDetailsComponents from '../components/MovieDetailsComponents'
import MovieDetailsSkeleton from '../components/MovieDetailsComponents/MovieDetailsSkeleton'
import { fetchMovies } from '../apis/movie'
import Error from '../components/Shared/Error'

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
      {loading && <MovieDetailsSkeleton />}
      <Error error={error} />
      {!loading && error == '' ? <MovieDetailsComponents details={details} /> : null}
    </MainWrapper>
  )
}

export default MoviesDetails