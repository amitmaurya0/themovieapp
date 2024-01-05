import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MovieItemContainer, MovieItemImage, MovieitemDetail, RatingContainer, RatingStarImage } from './styled'
import { makeReleaseDate } from '../../utils'
import { Spacer, Text } from '../styles'
import colors from '../../configs/colors'
import fonts, { fontSize } from '../../configs/fonts'
import Rating from './../Shared/Rating';

const MovieItem = ({ movie, onPress, imageBase }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MovieItemContainer>
          <MovieItemImage source={{ uri: imageBase+movie.poster_path }} />
          <Spacer />
          <MovieitemDetail>
            <Text 
              numberOfLines={2} 
              ellipsizeMode="tail"
              color={colors.white}
              size={fontSize.m} 
              fontFamily={fonts.bold} 
              style={{ textAlign: 'center', flexWrap: 'wrap' }}>
                {movie.title}
            </Text>
            <Spacer space={5} />
            <Text color={colors.white}>
              <Text fontFamily={fonts.bold} color={colors.white}>Released on: </Text>
              {makeReleaseDate(movie.release_date)}
              </Text>
            <Spacer space={2} />
            <Rating voteAverage={movie.vote_average} voteCount={movie.vote_count} />
          </MovieitemDetail>
      </MovieItemContainer>
    </TouchableOpacity>
  )
}

export default MovieItem