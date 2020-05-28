/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import AppNavigator from './Containers/AppNavigator/AppNavigator';
import { Provider } from 'react-redux';
import configStore from '../App/store/config_store';
const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};


export default App;
