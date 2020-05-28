import React from 'react'
import Style from './HeaderStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from '../../Images/Images'

const Header = (props) => {
    return (
        <View style={Style.headerStyle}>
            <Text style={Style.bagTextStyle}>Bag</Text>
            <View style={Style.headerRightStyle}>
                <TouchableOpacity onPress={props.onLinkClick()}>
                    <Image source={Images.link} style={Style.linkIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('notification pressed')}>
                    <Image source={Images.notification} style={Style.linkIconStyle} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Header;