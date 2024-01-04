import React from 'react'
import StyledWrapper, {HeadingContainer, LeftSideContainer} from './styled'
import { Spacer, Text } from '../styles';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';

const MainWrapper = ({ title="This is page title", mainStyle={}, withCart=false, withUser=false, children, subHeading, back=true, loading=false  }) => {
    
    return (
        <StyledWrapper>
            <HeadingContainer>
                <LeftSideContainer>
                    <Text color={colors.white} size={16} fontFamily={fonts.bold}>{title}</Text>
                </LeftSideContainer>
            </HeadingContainer>
            <Spacer />
            {children}
        </StyledWrapper>
    )
}

export default MainWrapper;