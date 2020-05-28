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
import { deleteProduct, addProducts, updateProduct, changeView } from '../../store/actions/index';
import { connect } from 'react-redux';

class ShoppingScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flipkartProducts: [],
            amazonProducts: [],
            flipkartTotal: 0,
            amazonTotal: 0,
        }
    }
    componentDidMount() {
        this.props.addProducts(StoreData.products)
    }
    sum = function (items, prop) {
        return items.reduce(function (a, b) {
            return a + b[prop];
        }, 0);
    };
    onLinkClick = () => {
        const allProducts = this.props.productList;
        const amazonProducts = allProducts.filter(product => product.category === "amazon")
        const flipkartProducts = allProducts.filter(product => product.category === "flipkart")
        this.props.changeView()
        this.setState({
            flipkartProducts: flipkartProducts,
            amazonProducts: amazonProducts,
            amazonTotal: this.sum(amazonProducts, 'price'),
            flipkartTotal: this.sum(flipkartProducts, 'price')
        })
    }
    onRatingPress = (product, key) => {
        const productList = this.props.productList;
        const objIndex = this.props.productList.findIndex((obj => obj.name === product.name));
        productList[objIndex].rating = key;
        this.props.updateProduct(productList)
    }
    onDeletePress = (product) => {
        if (this.props.singleView) {
            const updatedProductList = this.props.productList.filter(p => p != product)
            this.props.deleteProduct(updatedProductList)
        } else {
            const updatedFlipkartProducts = this.state.flipkartProducts.filter(p => p != product)
            const updatedAmazonProducts = this.state.amazonProducts.filter(p => p != product)
            this.props.updateProduct(updatedFlipkartProducts.concat(updatedAmazonProducts))
            this.setState({
                flipkartProducts: updatedFlipkartProducts,
                amazonProducts: updatedAmazonProducts,
                amazonTotal: this.sum(updatedAmazonProducts, 'price'),
                flipkartTotal: this.sum(updatedFlipkartProducts, 'price')
            })
        }
    }
    render() {
        return (
            <SafeAreaView style={Style.rootStyle}>
                <Header onLinkClick={() => this.onLinkClick} />
                {this.props.singleView ? <FlatList
                    data={this.props.productList}
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

const mapStateToProps = state => {
    return {
        productList: state.shopping.productList,
        singleView: state.shopping.singleView
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addProducts: (data) => dispatch(addProducts(data)),
        deleteProduct: (data) => dispatch(deleteProduct(data)),
        updateProduct: (data) => dispatch(updateProduct(data)),
        changeView: () => dispatch(changeView()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingScreen);