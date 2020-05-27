import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
    ratingStarStyle: {
        width: wp(6),
        height: wp(6),
        margin: wp(0.5)
    },
    rootStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: wp(2)
    }
})