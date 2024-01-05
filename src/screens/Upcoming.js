import { View, Text } from 'react-native'
import React from 'react'
import MainWrapper from '../components/MainWrapper'
import MovieList from '../components/MovieList'
import { useFetchMovie } from '../hooks'
import urls from '../apis/urls'

const Upcoming = () => {
  const [loading, movies, error] = useFetchMovie(urls.upcoming)
  return (
    <MainWrapper title='Upcoming'>
      <MovieList loading={loading} movies={movies} error={error} />
    </MainWrapper>
  )
}

export default Upcoming