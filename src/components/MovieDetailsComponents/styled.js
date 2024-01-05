import styled from "styled-components/native";
import colors from "../../configs/colors";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

export const MovieDetailsContainer = styled.View`
    border-radius: 5px ;
    padding-bottom: 10px;
`

export const MovieitemDetail = styled.View`
    height: 70px;
    padding-left: 5px;
    padding-right: 3px;
`;

export const MovieDetailsImage = styled.Image`
    border-radius: 5px;
    height: 400px;
    width: auto;
`;

export const RatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const RatingStarImage = styled.Image`
    height: 15px;
    width: 15px;
    margin-right: 5px;
`;

export const GenreLabel = styled.View`
    background-color: ${colors.textColor};
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 15px;
    align-items: center;
`