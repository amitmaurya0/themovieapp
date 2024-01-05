import React from 'react'
import MovieList from './../components/MovieList'
import MainWrapper from './../components/MainWrapper'
import urls from './../apis/urls'
import { useFetchMovie } from './../hooks'

const NowPlaying = () => {
  const [loading, movies, error, loadingMoreData, onReachEnd] = useFetchMovie(urls.nowPlaying);

  return (
    <MainWrapper title='Now Playing'>
      <MovieList
        loading={loading}
        movies={movies}
        error={error}
        handleEndReached={onReachEnd}
        loadingMoreData={loadingMoreData} />
    </MainWrapper>
  )
}

export default NowPlaying