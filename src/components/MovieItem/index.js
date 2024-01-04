import { View } from 'react-native'
import React from 'react'
import { MovieItemContainer, MovieItemImage } from './styled'
import { makeReleaseDate } from '../../utils'
import { Spacer, Text } from '../styles'
import colors from '../../configs/colors'
import fonts from '../../configs/fonts'

const MovieItem = () => {
  return (
    <MovieItemContainer>
        <MovieItemImage source={{ uri: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" }} />
        <Spacer />
        <Text color={colors.white} fontFamily={fonts.bold} style={{ textAlign: 'center', flexWrap: 'wrap' }}>Rebel Moon - Part One: A Child of Fire</Text>
        <Spacer space={5} />
        <Text color={colors.white}>{makeReleaseDate('2013-12-12')}</Text>
        <Text color={colors.white}> 6.466(971)</Text>
    </MovieItemContainer>
  )
}

export default MovieItem