import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingScreen from '../ShoppingScreen/ShoppingScreen';
import Style from './AppNavigatorStyle'
import { Text, Image, View } from 'react-native';
import Images from '../../Images/Images';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} options={{
                    title: 'Bag', headerTitleStyle: Style.titleStyle , headerStyle: Style.headerStyle, headerRight: () => (<View style={Style.headerRightStyle}>
                        <TouchableOpacity onPress={()=> alert('link pressed')}>
                            <Image source={Images.link} style={Style.linkIconStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> alert('notification pressed')}>
                            <Image source={Images.notification} style={Style.linkIconStyle} />
                        </TouchableOpacity>
                    </View>)
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;