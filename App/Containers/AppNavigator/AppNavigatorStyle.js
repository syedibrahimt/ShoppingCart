import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
    headerStyle: {
        elevation: 0
    },
    linkIconStyle: {
        height: wp(5),
        width: wp(5),
        tintColor: '#1269ff',
        margin: wp(3),
    },
    headerRightStyle: {
        flexDirection: 'row'
    },
    titleStyle:{
        color: '#1269ff'
    }
})