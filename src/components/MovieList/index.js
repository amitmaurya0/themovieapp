import { View } from 'react-native'
import React from 'react'
import MovieItem from '../MovieItem'
import {Text} from './../styles'
import { makeReleaseDate } from '../../utils'
const MovieList = () => {
  return (
    <View>
      <MovieItem />
     
    </View>
  )
}

export default MovieList