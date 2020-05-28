import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
    storeLogoStyle: {
        height: wp(12),
        width: wp(25),
        marginHorizontal: wp(5),
    },
    rootStyle:{
        backgroundColor: 'white'
    },
    totalTextStyle: {
        color: '#0307fc',
        fontSize: wp(6),
        textAlign: 'center'
    }
})