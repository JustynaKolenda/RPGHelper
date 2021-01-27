import * as React from 'react';
import { Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationName } from '../variables/NavigationName';
import ListScreen from '../screeens/ListScreen';
import CartsScreen from '../screeens/CartsScreen';
import StackNavigation from './StackNavigation';
import OwnBottomNav from './OwnBottomNav';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
 
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <OwnBottomNav {...props} />}
      >
        <Tab.Screen name={NavigationName.LIST} component={StackNavigation} />
        <Tab.Screen name={NavigationName.MONSTER} component={StackNavigation} />
        <Tab.Screen name={NavigationName.PUZLE} component={StackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation