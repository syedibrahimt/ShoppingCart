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
    },
    midSectionStyle: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 3
    },
    midSectionBottomStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})