import { View, Text } from 'react-native'
import React from 'react'
import MainWrapper from '../components/MainWrapper'
import MovieList from '../components/MovieList'
import { useFetchMovie } from '../hooks'
import urls from '../apis/urls'

const Popular = () => {
  const [loading, movies, error, loadingMoreData, onReachEnd] = useFetchMovie(urls.popular)
  return (
    <MainWrapper title='Popular'>
      <MovieList
        loading={loading}
        movies={movies}
        error={error}
        handleEndReached={onReachEnd}
        loadingMoreData={loadingMoreData}
      />
    </MainWrapper>
  )
}

export default Popular