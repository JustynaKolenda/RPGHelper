import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationName } from '../variables/NavigationName';
import CartsScreen from '../screeens/CartsScreen';
import SymbolScreen from '../screeens/SymbolScreen';
import ScreenOfCardDesc from '../screeens/Description/ScreenOfCardDesc';
import ListScreen from '../screeens/ListScreen';


const Stack = createStackNavigator();

const StackNavigation = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationName.LIST}  options={{headerShown: false}} component={ListScreen} />
      <Stack.Screen name={NavigationName.CARTS} component={CartsScreen} />
      <Stack.Screen name={NavigationName.SYMBOL}  component={SymbolScreen} />
      <Stack.Screen name={NavigationName.CARTDESCRIPTION}  options={{headerShown: false}}  component={ScreenOfCardDesc} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
