import { FlatList, View } from 'react-native'
import React from 'react'
import MovieItem from '../MovieItem'
import {Text} from './../styles'
import { makeReleaseDate } from '../../utils'
import Loading from './../Loading'
const MovieList = ({ movies, loading, error }) => {
  return (
    <View>
      { loading && <Loading /> }
      <FlatList 
        data={movies}
        renderItem={({ item }) => <MovieItem movie={item} />}
        style={{ marginBottom: 40 }}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  )
}

export default MovieList