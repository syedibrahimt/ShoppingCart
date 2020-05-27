import React from 'react'
import Style from './RatingBarStyle'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from '../../Images/Images';

class RatingBar extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                default_rating: 0,
                max_rating: 5
            }
    }
    updateRating(key) {
        this.setState({ default_rating: key });
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
        return (
            <View style={Style.rootStyle}>
                {ratings}
            </View>
        )
    }
}

export default RatingBar;