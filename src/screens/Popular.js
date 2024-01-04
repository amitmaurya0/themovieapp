import { View, Text } from 'react-native'
import React from 'react'
import MainWrapper from '../components/MainWrapper'
import MovieList from '../components/MovieList'

const Popular = () => {
  return (
    <MainWrapper title='Popular'>
      <MovieList />
    </MainWrapper>
  )
}

export default Popular