import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingScreen from '../ShoppingScreen/ShoppingScreen';
import Style from './AppNavigatorStyle'
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} options={{
                    title: 'Bag', headerStyle: Style.headerStyle
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;