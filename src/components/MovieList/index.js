import { FlatList, View } from 'react-native'
import React, { useContext } from 'react'
import MovieItem from '../MovieItem'
import {Text} from './../styles'
import { makeReleaseDate } from '../../utils'
import Loading from './../Loading'
import { useNavigation } from '@react-navigation/core'
import { ConfigContext } from '../../ConfigProvider'

const MovieList = ({ movies, loading, error }) => {
  const { thumbImageBase } = useContext(ConfigContext);
  const navigation = useNavigation();
  const onItemPress = (movieId) => {
    navigation.navigate('Details', { movie_id: movieId })
  }

  return (
    <View>
      { loading && <Loading /> }
      <FlatList 
        data={movies}
        renderItem={({ item }) => <MovieItem imageBase={thumbImageBase} onPress={() => onItemPress(item.id)} movie={item} />}
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