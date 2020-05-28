import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        height: hp(8),
        width: wp(100),
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: wp(4)
    },
    headerRightStyle: {
        flexDirection: 'row',
    },
    linkIconStyle: {
        tintColor: '#0307fc',
        width: wp(6),
        height: wp(6),
        margin: wp(2)
    },
    bagTextStyle: {
        color: '#0307fc',
        fontSize: wp(6),
    }
})