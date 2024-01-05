import { Dimensions, FlatList, View } from 'react-native'
import React, { useContext } from 'react'
import MovieItem from '../MovieItem'
import { useNavigation } from '@react-navigation/core'
import { ConfigContext } from '../../ConfigProvider'
import MovieListSkeleton from './MovieListSkeleton';
import Error from './../Shared/Error'
import Loading from '../Shared/Loading'
import { Spacer } from '../styles'
const MovieList = ({ movies, loading, error='', handleEndReached, loadingMoreData=false }) => {
  const { thumbImageBase } = useContext(ConfigContext);
  const navigation = useNavigation();

  const numColumns = Dimensions.get('window').width > 600 ? 5 : 2;

  const onItemPress = (movieId) => {
    navigation.navigate('Details', { movie_id: movieId })
  }

  return (
    <View>
      { loading && <MovieListSkeleton /> }
      {<Error error={error} />}
      { !loading && error == '' ? <FlatList 
        data={movies}
        renderItem={({ item }) => <MovieItem imageBase={thumbImageBase} onPress={() => onItemPress(item.id)} movie={item} />}
        style={{ marginBottom: 40 }}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={numColumns}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={10} 
        ListFooterComponent={loadingMoreData ? <><Spacer /><Loading /><Spacer space={20} /></> : null}
      /> : null}
    </View>
  )
}

export default MovieList