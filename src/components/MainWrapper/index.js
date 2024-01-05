import React from 'react'
import StyledWrapper, {HeadingContainer, LeftSideContainer} from './styled'
import { Spacer, Text } from '../styles';
import fonts, { fontSize } from '../../configs/fonts';
import colors from '../../configs/colors';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BACK_ICON } from '../../configs/images';

const MainWrapper = ({ title="", children, back=false, }) => {
    const navigation = useNavigation();
    return (
        <StyledWrapper>
            <HeadingContainer>
                <LeftSideContainer>
                    {
                        back && (<TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={BACK_ICON} tintColor={colors.white} style={{ height: 25, width: 25 }}></Image>
                        <Spacer space={'0'} width={'30'} />
                        </TouchableOpacity>)
                    }
                    {title && <Text size={fontSize.l} fontFamily={fonts.bold}>{title}</Text>}
                </LeftSideContainer>
            </HeadingContainer>
            <Spacer space={20} />
            {children}
        </StyledWrapper>
    )
}

export default MainWrapper;