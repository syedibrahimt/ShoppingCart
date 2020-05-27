import React from 'react'
import Style from './ProductCardStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from '../../Images/Images'
import RatingBar from '../RatingBar/RatingBar'

const ProductCard = ({ product }) => {
    return (
        <View style={Style.cardStyle}>
            <Image source={Images[product.image]} style={Style.cardImageStyle} />
            <View style={Style.midSectionStyle}>
                <Text style={Style.nameTextStyle} numberOfLines={1}>{product.name}</Text>
                <View style={Style.midSectionBottomStyle}>
                    <Text style={Style.priceTextStyle}>{product.price}</Text>
                    <RatingBar />
                </View>
            </View>
            <TouchableOpacity onPress={()=> alert('delete pressed')}>
                <Image source={Images.delete} style={Style.deleteIconStyle} />
            </TouchableOpacity>
        </View>
    )
}

export default ProductCard;