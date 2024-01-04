import styled from "styled-components/native";
import colors from "../../configs/colors";

export const MovieItemContainer = styled.View`
    max-width: 120px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.textColor};
    border-radius: 10px ;
    padding-bottom: 10px;
`

export const MovieItemImage = styled.Image`
    height: 100px;
    width: 120px;
    border-radius: 10px 10px 0px 0px;
`;