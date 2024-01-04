import { View, Text } from 'react-native'
import React from 'react'
import MainWrapper from '../components/MainWrapper'
import MovieList from '../components/MovieList'

const TopRated = () => {
  return (
    <MainWrapper title='Top Rated'>
      <MovieList />
    </MainWrapper>
  )
}

export default TopRated