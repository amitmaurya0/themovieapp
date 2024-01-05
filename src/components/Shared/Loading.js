import React, { Component } from 'react';
import { View ,ActivityIndicator,Text} from 'react-native';
import colors from '../../configs/colors';
import { LoadingContainer } from './styled';


const Loading = ({ loading=true, color=colors.white }) =>{
    if(!loading)
        return null;
    return(
        <LoadingContainer>
            <ActivityIndicator color={color} />
            <Text style={{ color: color }} >Please wait...</Text>
        </LoadingContainer>
)}

export default Loading;