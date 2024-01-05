import { View } from 'react-native'
import React from 'react'
import { RatingContainer, RatingStarImage } from './styled'
import { Text } from './../styles';
import { STAR } from '../../configs/images';
import colors from '../../configs/colors';
import { fontSize } from '../../configs/fonts';

const Rating = ({ voteAverage=0.0, voteCount=1, size=14 }) => {
  return (
    <RatingContainer>
        <RatingStarImage source={STAR} /> 
        <Text size={size} color={colors.white}> 
        {(voteAverage).toFixed(1)} ({voteCount})
        </Text>
    </RatingContainer>
  )
}

export default Rating