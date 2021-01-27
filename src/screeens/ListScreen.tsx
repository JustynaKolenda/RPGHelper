import React from 'react'
import { Dimensions, SafeAreaView, Text,  } from 'react-native'
import SymbolsScreen from './SymbolsScreen'
import styled from 'styled-components/native'
import CartsScreen from './CartsScreen'

const ListScreen = ()=> {
    return(
        <GroupView>
            <SymbolsScreen/>
            <ViewSeparator/>
            <CartsScreen/>
        </GroupView>
    )
}

const {width, height} = Dimensions.get('window')
const GroupView = styled.View({
    backgroundColor:'#3C3D3E',
    height: height
})
const ViewSeparator = styled.View({
    paddingBottom:2,
    backgroundColor: '#ffffff'
})

export default ListScreen