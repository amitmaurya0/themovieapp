import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { View, Text, StyleSheet } from 'react-native'
import { itemWidth } from "./styled";
import colors from "../../configs/colors";


const MovieItemSkeleton = () => {
  return (
    <SkeletonPlaceholder backgroundColor={colors.skeletonBg} highlightColor={colors.skeletonHighlight}>
        <View style={styles.container}>
            <View style={styles.imageView} />
            <View style={styles.title} />
            <View style={styles.subtitle} />
        </View>
    </SkeletonPlaceholder>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20, 
        width: itemWidth ,
        height: 250,
    },
    imageView: {
        width: itemWidth, 
        height: 180,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    title: {
        marginTop: 6, 
        height: 15, 
        borderRadius: 5
    },
    subtitle: {
        marginTop: 6, 
        width: itemWidth-50,
        height: 15, 
        borderRadius: 5
    }
})

export default MovieItemSkeleton