import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MovieItemSkeleton from '../MovieItem/MovieItemSkeleton'

const MovieListSkeleton = () => {
  return (
    <FlatList 
        data={[1,2,3,4,5,6,7,8,9]}
        renderItem={({ item }) =>  <MovieItemSkeleton key={item} />}
        style={{ marginBottom: 40 }}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
   
  )
}

export default MovieListSkeleton