import { Image, View } from 'react-native'
import React from 'react'
import { MovieItemContainer, MovieItemImage, MovieitemDetail, RatingContainer, RatingStarImage } from './styled'
import { makeReleaseDate } from '../../utils'
import { Spacer, Text } from '../styles'
import colors from '../../configs/colors'
import fonts from '../../configs/fonts'
import { STAR } from '../../configs/images'

const MovieItem = ({ movie }) => {
  return (
    <MovieItemContainer>
        <MovieItemImage source={{ uri: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" }} />
        <Spacer />
        <MovieitemDetail>
          <Text 
            numberOfLines={2} 
            ellipsizeMode="tail"
            color={colors.white} 
            fontFamily={fonts.bold} 
            style={{ textAlign: 'center', flexWrap: 'wrap' }}>
              {movie.title}
          </Text>
          <Spacer space={5} />
          <Text color={colors.white}>
           <Text fontFamily={fonts.bold} color={colors.white}>Released on: </Text>
            {makeReleaseDate(movie.release_date)}</Text>
          <Spacer space={2} />
          <RatingContainer>
            <RatingStarImage source={STAR} /> 
            <Text color={colors.white}> 
              {(movie.vote_average).toFixed(1)} ({movie.vote_count})
            </Text>
          </RatingContainer>
        </MovieitemDetail>
    </MovieItemContainer>
  )
}

export default MovieItem