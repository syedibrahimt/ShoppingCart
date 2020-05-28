import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from '../../Images/Images'
import Style from './BuyButtonStyle'

const BuyButton = (props) => {
    return (
        <View style={Style.buttonStyle}>
            <Text style={Style.textStyle}>Buy Now</Text>
        </View>

    )
}

export default BuyButton;