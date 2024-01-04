import styled from 'styled-components/native'
import fonts from '../configs/fonts.js';


export const Text = styled.Text`
    top: 0;
    left: 0;
    font-family: ${props => props.fontFamily ? props.fontFamily : fonts.regular};
    font-weight: 500;
    color: ${props => props.color ? props.color : '#3a484c'};
    font-size: ${props => props.size ? props.size : 13}px;
    letter-spacing: 0;
    text-align: ${props => props.textAlign ? props.textAlign : 'auto'};
`;

