import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { View, Text, StyleSheet } from 'react-native'
import { itemWidth } from "./styled";
import colors from "../../configs/colors";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

const MovieDetailsSkeleton = () => {
  return (
    <SkeletonPlaceholder backgroundColor={colors.skeletonBg} highlightColor={colors.skeletonHighlight}>
        <View style={styles.container}>
            <View style={styles.imageView} />
            <View style={styles.title} />
            <View style={styles.title1} />
            <View style={styles.title2} />
            <View style={styles.subtitle} />
        </View>
    </SkeletonPlaceholder>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20, 
    },
    imageView: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 300,
        width: windowWidth,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    title: {
        marginTop: 6, 
        height: 25, 
        borderRadius: 5
    },
    title1: {
        marginTop: 6, 
        height: 50,
        width: windowWidth -100, 
        borderRadius: 5
    },
    title2: {
        marginTop: 6, 
        height: 30,
        width: windowWidth -150, 
        borderRadius: 5
    },
    subtitle: {
        marginTop: 6, 
        width: windowWidth-50,
        height: 30, 
        borderRadius: 5
    }
})

export default MovieDetailsSkeleton