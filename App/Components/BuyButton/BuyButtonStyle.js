import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
    buttonStyle: {
        width: wp(30),
        height: wp(12),
        borderRadius: wp(30),
        alignSelf: 'center',
        backgroundColor: '#0307fc',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: wp(5)
    },
    textStyle: {
        color: 'white',
    }
})