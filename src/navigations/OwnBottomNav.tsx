import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as React from 'react'
import { NavigationName } from '../variables/NavigationName';
import styled from 'styled-components/native';

const IconsMenu = new Map([
    [NavigationName.LIST, 'ic_dungeon'],
    [NavigationName.MONSTER, 'ic_monster'],
    [NavigationName.PUZLE, 'ic_puzle'],
  ]);

function OwnBottomNav(props:any) {
    const { state, descriptors, navigation} = props;
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
    
      return (
        <ViewGoup>
          {state.routes.map((route, index) => {

            const { options } = descriptors[route.key];
            if(!IconsMenu.get(route.name)) return null;
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, backgroundColor:'#000000', alignItems:'center', height:74 , justifyContent:'center'}}
              >
                <ImageRoute style={{ width: isFocused ? 52 : 34,
                      height: isFocused? 52 : 34,
                      bottom: isFocused? 40 : 30,
                    }}
                   source={{uri: IconsMenu.get(route.name)}}
                />
                <RouteName style={{ color: isFocused ? 'white' : 'transparent', }}>
                    {route.name}
                </RouteName>
              </TouchableOpacity>
            );
          })}
        </ViewGoup>
      );
  }

  const ViewGoup = styled.View({
    flexDirection: 'row',
    backgroundColor:'#000000',
  })

  const RouteName = styled.Text({
    fontFamily:'PerryGothic',
    fontSize: 14,
    bottom:-15
  })

  const ImageRoute = styled.Image({
    position:'absolute',
    zIndex:2
  })

export default OwnBottomNav