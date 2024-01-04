import { View, Text } from 'react-native'
import React from 'react'
import MainWrapper from '../components/MainWrapper'
import MovieList from '../components/MovieList'

const Upcoming = () => {
  return (
    <MainWrapper title='Upcoming'>
      <MovieList />
    </MainWrapper>
  )
}

export default Upcoming