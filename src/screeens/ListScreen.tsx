import React from 'react'
import { Dimensions, SafeAreaView, Text,  } from 'react-native'
import SymbolsScreen from './SymbolsScreen'
import styled from 'styled-components/native'
import CartsScreen from './CartsScreen'
import ButtonScreen from './ButtonScreen'

const ListScreen = ()=> {
    return(
        <GroupView>
        <SafeAreaView style={{backgroundColor:'#000000'}}>
            <SymbolsScreen/>
            <ViewSeparator/>
            <CartsScreen/>
            <ButtonScreen/>
        </SafeAreaView>
        </GroupView>
    )
}

const {width, height} = Dimensions.get('window')
const GroupView = styled.View({
    backgroundColor:'#000000',
    height: height
})
const ViewSeparator = styled.View({
    paddingBottom:2,
    backgroundColor: '#ffffff'
})

export default ListScreen