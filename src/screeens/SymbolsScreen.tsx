import React, { useState } from 'react'
import { Dimensions, FlatList, Image,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { SymbolData } from '../variables/SymbolData'
import SymbolScreen from './SymbolScreen'


const SymbolsScreen = () => {

    const separator = () => (<Separator/>)
    const onPress = (id:string)=> {
      return console.log(id)
    }

    return(
        <ViewGroup>
            <FlatList
                style={{ backgroundColor:'#000000', width:'100%', }}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                ItemSeparatorComponent={separator}
                data={SymbolData}
                keyExtractor={(item)=>item.id}
                horizontal={true}
                renderItem={({item})=><SymbolScreen onPress={onPress} item={item}/>}
            />
        </ViewGroup>
    )
}

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  backgroundColor:'#000000',
  paddingLeft: 10,
  paddingTop: 20,
  width: width,
  paddingBottom: 10,
  borderBottomWidth: 2,
  borderBottomColor: '#ffffff'
})

const Separator = styled.View({
  paddingTop:10,
  marginLeft: 20,
})

export default SymbolsScreen