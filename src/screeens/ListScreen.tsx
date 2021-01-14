import React from 'react'
import { Dimensions, SafeAreaView, Text,  } from 'react-native'
import SymbolScreen from './SymbolScreen'
import styled from 'styled-components/native'
import CartScreen from './CartScreen'

const ListScreen = ()=> {
    return(
        <GroupView>
        <SafeAreaView style={{backgroundColor:'#000000'}}>
            <SymbolScreen/>
            <CartScreen/>
            <Button>
                <ButtonText>+</ButtonText>
            </Button>
        </SafeAreaView>
        </GroupView>
    )
}

const {width, height} = Dimensions.get('window')
const GroupView = styled.View({
    backgroundColor:'#000000',
    height: height
})

const Button = styled.TouchableOpacity({
    position:'absolute',
    backgroundColor:'#136d94',
    bottom:0,
    right:10,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
})

const ButtonText = styled.Text({
    color: '#ffffff',
    fontSize:20
})
export default ListScreen