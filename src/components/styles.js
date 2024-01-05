import styled from 'styled-components/native'
import fonts from '../configs/fonts.js';
import colors from '../configs/colors.js';

export const Spacer = styled.View`
    height: ${props => props.space ? props.space : 10}px;
    width: ${props => props.width ? `${props.width}px` : `100%`};
`;


export const Text = styled.Text`
    top: 0;
    left: 0;
    font-family: ${props => props.fontFamily ? props.fontFamily : fonts.regular};
    font-weight: 500;
    color: ${props => props.color ? props.color : colors.white};
    font-size: ${props => props.size ? props.size : 13}px;
    letter-spacing: 0;
    text-align: ${props => props.textAlign ? props.textAlign : 'auto'};
`;



export const RowView = styled.View`
    justify-content: ${(props) => props.sb == false ? 'flex-start' : 'space-between'} ;
    flex-direction: row;
`;

export const Divider = styled.View`
    
    border-bottom-width: 1px;
    border-color: grey;
    border-style: dashed;
    width: 100%;
    opacity: 0.3;
`;
