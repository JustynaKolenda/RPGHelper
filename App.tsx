/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { } from 'react-native';
import BottomNavigation from './src/navigations/BottomNavigation';
import { CounterStore, CounterStoreContext } from './src/store/store';


declare const global: {HermesInternal: null | {}};

const App = () => {
  const store = new CounterStore()
  return (
    <CounterStoreContext.Provider value={store}>
        <BottomNavigation />
    </CounterStoreContext.Provider>
  );
};


export default App;
