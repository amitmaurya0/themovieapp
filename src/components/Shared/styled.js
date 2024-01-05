import styled from "styled-components/native";
import colors from "../../configs/colors";


export const RatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const RatingStarImage = styled.Image`
    height: 15px;
    width: 15px;
    margin-right: 5px;
`;

export const ErrorContainer = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;
`;
export const ErrorImage = styled.Image`
    height: 50px;
    width: 50px;
`;

export const LoadingContainer = styled.View`
    flex:1; 
    background-color: ${colors.bgColor}; 
    align-items: center;
    justify-content: center;
`;