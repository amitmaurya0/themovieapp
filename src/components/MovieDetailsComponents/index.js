import { ScrollView, View } from 'react-native'
import React, { useContext } from 'react'
import { GenreLabel, MovieDetailsContainer, MovieDetailsImage } from './styled'
import { Divider, RowView, Spacer, Text } from '../styles'
import fonts, { fontSize } from '../../configs/fonts'
import Rating from '../Shared/Rating'
import { makeReleaseDate } from '../../utils'
import { ConfigContext } from '../../ConfigProvider'

const MovieDetailsComponents = ({ details }) => {
  const { originaImageBase } = useContext(ConfigContext);
  return (
    <ScrollView>

      <MovieDetailsContainer>
        <MovieDetailsImage resizeMode="contain" source={{ uri: originaImageBase+details.poster_path }} />
        <Spacer />
        <Text fontFamily={fonts.bold} size={fontSize.l}>{details.original_title}</Text>
        <Spacer />
        <Divider />
        <Spacer />
        <Text size={fontSize.m}>{details.overview}</Text>

        <Spacer />
        <Divider />
        <Spacer />
        <RowView>
          <Text size={fontSize.m}>
            <Text size={fontSize.m} fontFamily={fonts.bold}>Released on: </Text>
            {makeReleaseDate(details.release_date)}
            </Text>
          <Rating size={fontSize.m} voteAverage={details.vote_average} voteCount={details.vote_count} />
        </RowView>
        <Spacer />
        <Text size={fontSize.m}>
          <Text size={fontSize.m} fontFamily={fonts.bold}>Popularity: </Text>
          {details.popularity}
        </Text>
        <Spacer />
        <Divider />
        <Spacer />
        <Text size={fontSize.m} fontFamily={fonts.bold}>Genres: </Text>
        <Spacer />
        <RowView sb={false}>
          {
            details && 
            details.genres && 
            details.genres.map(item => 
              <GenreLabel key={item.id}>
                <Text >{item.name}</Text>
              </GenreLabel>
            )
          }
        </RowView>
      </MovieDetailsContainer>
    </ScrollView>
  )
}

export default MovieDetailsComponents