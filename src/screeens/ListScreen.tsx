import React from 'react'
import { Dimensions, SafeAreaView, Text, TouchableOpacity,  } from 'react-native'
import SymbolScreen from './SymbolScreen'
import styled from 'styled-components/native'
import CartScreen from './CartScreen'

const ListScreen = ()=> {
    return(
        <GroupView>
        <SafeAreaView style={{backgroundColor:'#000000'}}>
            <SymbolScreen/>
            <CartScreen/>
            {/* <TouchableOpacity>
                <Text>Kliknij</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
        </GroupView>
    )
}

const {width, height} = Dimensions.get('window')
const GroupView = styled.View({
    backgroundColor:'#000000',
    height: height
})
export default ListScreen