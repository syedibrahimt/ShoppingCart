import React from 'react'
import { View, ScrollView } from 'react-native';
import Style from './ShoppingScreenStyle'
import ProductCard from '../../Components/ProductCard/ProductCard';
import StoreData from '../../../test_data/StoreData.json';

class ShoppingScreen extends React.Component {
    render() {
        const productList = StoreData.products;
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {productList.map((product, key) => <ProductCard key={key} product={product} />)}
            </ScrollView>
        );
    }
}

export default ShoppingScreen;