import fonts, { fontSize } from '../../configs/fonts'
import { ERROR_ICON } from '../../configs/images'
import { Spacer, Text } from '../styles'
import { ErrorContainer, ErrorImage } from './styled'

const Error = ({ error="Some error occured" }) => {
    
    if(error == '')
    return null

    return (
        <ErrorContainer>
            <ErrorImage source={ERROR_ICON} />
            <Spacer />
            <Text fontFamily={fonts.bold} size={fontSize.l}>Error</Text>
            <Spacer />
            <Text size={fontSize.m}>{error}</Text>
        </ErrorContainer>
    )
}

export default Error