import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
    cardStyle: {
        flexDirection: 'row',
        padding: wp(6),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardImageStyle: {
        height: wp(15),
        width: wp(15),
        flex: 1
    },
    deleteIconStyle: {
        height: wp(6),
        width: wp(6),
        tintColor: '#1269ff',
        margin: wp(2)
    },
    midSectionStyle: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 3,
        paddingLeft: wp(5)
    },
    midSectionBottomStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameTextStyle: {
        fontSize: wp(5),
        color: '#1269ff'
    },
    priceTextStyle: {
        fontSize: wp(4),
        color: '#7a7a7a'
    },
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