import styled from "styled-components/native";
import colors from "../../configs/colors";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const itemWidth = windowWidth/2-26;

export const MovieItemContainer = styled.View`
    max-width: ${itemWidth}px;
    height: 200px;
    background-color: ${colors.textColor};
    border-radius: 5px ;
    padding-bottom: 10px;
`

export const MovieitemDetail = styled.View`
    height: 70px;
    padding-left: 5px;
    padding-right: 3px;
`;

export const MovieItemImage = styled.Image`
    height: 110px;
    width: ${itemWidth}px;
    border-radius: 5px 5px 0px 0px;
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