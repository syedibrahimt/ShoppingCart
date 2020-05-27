import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingScreen from '../ShoppingScreen/ShoppingScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Bag" component={ShoppingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;