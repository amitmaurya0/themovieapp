import React from 'react'
import MovieList from './../components/MovieList'
import MainWrapper from './../components/MainWrapper'
import urls from './../apis/urls'
import { useFetchMovie } from './../hooks'

const NowPlaying = () => {
  const [loading, movies, error] = useFetchMovie(urls.nowPlaying)
  return (
    <MainWrapper title='Now Playing'>
      <MovieList loading={loading} movies={movies} error={error} />
    </MainWrapper>
  )
}

export default NowPlaying