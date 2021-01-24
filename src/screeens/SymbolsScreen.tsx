import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Dimensions, FlatList, Image, SafeAreaView,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { SymbolData } from '../variables/SymbolData'
import SymbolScreen from './SymbolScreen'


const SymbolsScreen =  observer(() => {

    const separator = () => (<Separator/>)

    return(
      <SafeAreaView style={{backgroundColor:'#000000'}}>
        <ViewGroup>
            <FlatList
                style={{ backgroundColor:'#ffffff', width:'100%', }}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}
                ItemSeparatorComponent={separator}
                data={SymbolData}
                keyExtractor={(item)=>item.id}
                horizontal={true}
                renderItem={({item})=><SymbolScreen  item={item}/>}
            />
        </ViewGroup>
        </SafeAreaView>
    )
})

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  backgroundColor:'#707070',
  height: 96,
  width: width,
  borderBottomWidth: 1,
 
})

const Separator = styled.View({
  paddingTop:10,
  marginLeft: 20,
})

export default SymbolsScreen