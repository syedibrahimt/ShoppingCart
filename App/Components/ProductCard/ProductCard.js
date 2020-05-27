import React from 'react'
import Style from './ProductCardStyle'
import { View, Text, Image } from 'react-native'
import Images from '../../Images/Images'

const ProductCard = ({ product }) => {
    return (
        <View style={Style.cardStyle}>
            <Image source={Images[product.image]} style={Style.cardImageStyle} />
            <View style={Style.midSectionStyle}>
                <Text>{product.name}</Text>
                <View style={Style.midSectionBottomStyle}>
                    <Text>{product.price}</Text>
                </View>
            </View>
            <Image source={Images.delete} style={Style.deleteIconStyle} />
        </View>
    )
}

export default ProductCard;