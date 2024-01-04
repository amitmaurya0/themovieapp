import { View, Text } from 'react-native'
import React from 'react'
import MovieList from './../components/MovieList'
import MainWrapper from './../components/MainWrapper'

const NowPlaying = () => {
  return (
    <MainWrapper title='Now Playing'>
      <MovieList />
    </MainWrapper>
  )
}

export default NowPlaying