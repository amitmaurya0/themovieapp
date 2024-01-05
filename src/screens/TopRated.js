import { View, Text } from 'react-native'
import React from 'react'
import MainWrapper from '../components/MainWrapper'
import MovieList from '../components/MovieList'
import { useFetchMovie } from '../hooks'
import urls from '../apis/urls'

const TopRated = () => {
  const [loading, movies, error, loadingMoreData, onReachEnd] = useFetchMovie(urls.topRated)
  return (
    <MainWrapper title='Top Rated'>
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

export default TopRated