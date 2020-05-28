import React from 'react'
import { Image, Text } from 'react-native';
import Style from './ShoppingScreenStyle'
import ProductCard from '../../Components/ProductCard/ProductCard';
import Header from '../../Components/Header/Header';
import StoreData from '../../../test_data/StoreData.json';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../Images/Images'
import BuyButton from '../../Components/BuyButton/BuyButton';

class ShoppingScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            singleView: true,
            flipkartProducts: [],
            amazonProducts: [],
            flipkartTotal: 0,
            amazonTotal: 0,
        }
    }
    componentDidMount() {
        this.setState({
            productList: StoreData.products
        })
    }
    sum = function (items, prop) {
        return items.reduce(function (a, b) {
            return a + b[prop];
        }, 0);
    };
    onLinkClick = () => {
        const allProducts = this.state.productList;
        const amazonProducts = allProducts.filter(product => product.category === "amazon")
        const flipkartProducts = allProducts.filter(product => product.category === "flipkart")
        this.setState({
            flipkartProducts: flipkartProducts,
            amazonProducts: amazonProducts,
            singleView: !this.state.singleView,
            amazonTotal: this.sum(amazonProducts, 'price'),
            flipkartTotal: this.sum(flipkartProducts, 'price')
        })
    }
    onRatingPress = (product, key) => {
        const productList = this.state.productList;
        const objIndex = this.state.productList.findIndex((obj => obj.name === product.name));
        productList[objIndex].rating = key;
        this.setState({
            productList: productList
        })
    }
    onDeletePress = (product) => {
        if (this.state.singleView) {
            const updatedProductList = this.state.productList.filter(p => p != product)
            this.setState({
                productList: updatedProductList
            })
        } else {
            const updatedFlipkartProducts = this.state.flipkartProducts.filter(p => p != product)
            const updatedAmazonProducts = this.state.amazonProducts.filter(p => p != product)
            this.setState({
                flipkartProducts: updatedFlipkartProducts,
                amazonProducts: updatedAmazonProducts,
                productList: updatedFlipkartProducts.concat(updatedAmazonProducts),
                amazonTotal: this.sum(updatedAmazonProducts, 'price'),
                flipkartTotal: this.sum(updatedFlipkartProducts, 'price')
            })
        }
    }
    render() {
        return (
            <SafeAreaView style={Style.rootStyle}>
                <Header onLinkClick={() => this.onLinkClick} />
                {this.state.singleView ? <FlatList
                    data={this.state.productList}
                    renderItem={({ item }) => (
                        <ProductCard product={item} onRatingPress={this.onRatingPress} onDeletePress={this.onDeletePress} />
                    )}
                    keyExtractor={item => item.name}
                /> :
                    <ScrollView>
                        <Image source={Images.flipkart} style={Style.storeLogoStyle} />
                        <FlatList
                            data={this.state.flipkartProducts}
                            renderItem={({ item }) => (
                                <ProductCard product={item} onRatingPress={this.onRatingPress} onDeletePress={this.onDeletePress} />
                            )}
                            keyExtractor={item => item.name}
                        />
                        <Text style={Style.totalTextStyle}>Total ({this.state.flipkartProducts.length} items) Rs {this.state.flipkartTotal}</Text>
                        <BuyButton />
                        <Image source={Images.amazon} style={Style.storeLogoStyle} />
                        <FlatList
                            data={this.state.amazonProducts}
                            renderItem={({ item }) => (
                                <ProductCard product={item} onRatingPress={this.onRatingPress} onDeletePress={this.onDeletePress} />
                            )}
                            keyExtractor={item => item.name}
                        />
                        <Text style={Style.totalTextStyle}>Total ({this.state.amazonProducts.length} items) Rs {this.state.amazonTotal}</Text>
                        <BuyButton />
                    </ScrollView>
                }

            </SafeAreaView>
        );
    }
}

export default ShoppingScreen;