import React from 'react'
import Style from './ProductCardStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from '../../Images/Images'

class ProductCard extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                default_rating: this.props.product.rating,
                max_rating: 5
            }
    }
    updateRating(key) {
        this.setState({ default_rating: key });
        this.props.onRatingPress(this.props.product, key);
    }
    render() {
        let ratings = [];
        //Array to hold the filled or empty Stars
        for (var i = 1; i <= 5; i++) {
            ratings.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={this.updateRating.bind(this, i)}>
                    <Image
                        style={Style.ratingStarStyle}
                        source={
                            i <= this.state.default_rating
                                ? Images.star
                                : Images.empty_star
                        }
                    />
                </TouchableOpacity>
            );
        }
        const product = this.props.product;
        return (
            <View style={Style.cardStyle}>
                <Image source={Images[product.image]} style={Style.cardImageStyle} />
                <View style={Style.midSectionStyle}>
                    <Text style={Style.nameTextStyle} numberOfLines={1}>{product.name}</Text>
                    <View style={Style.midSectionBottomStyle}>
                        <Text style={Style.priceTextStyle}>{product.price}</Text>
                        {ratings}
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.onDeletePress(product)}>
                    <Image source={Images.delete} style={Style.deleteIconStyle} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default ProductCard;