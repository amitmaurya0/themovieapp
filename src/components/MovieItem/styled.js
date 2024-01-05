import styled from "styled-components/native";
import colors from "../../configs/colors";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

const numColumns = Dimensions.get('window').width > 600 ? 5 : 2;
export const itemWidth = windowWidth/numColumns-26;

export const MovieItemContainer = styled.View`
    max-width: ${itemWidth}px;
    height: 250px;
    background-color: ${colors.textColor};
    border-radius: 5px ;
    padding-bottom: 10px;
    border: 1px solid #6E6E6E;
`

export const MovieitemDetail = styled.View`
    height: 70px;
    padding-left: 5px;
    padding-right: 3px;
`;

export const MovieItemImage = styled.Image`
    height: 150px;
    width: ${itemWidth-3}px;
    border-radius: 5px 5px 0px 0px;
`;