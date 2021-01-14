import React from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { CartsDATA } from '../variables/CartsData'

const CartScreen = ()=> {

    const onPress = ()=> {
        console.log('click')
    }

    const renderItem = ({ item }:any) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <Title>{item.title}</Title>
            </TouchableOpacity>
        )
    };

    const separator = () => (<Separator/>)


    return(
        <ViewGroup>
            <FlatList
                style={{ backgroundColor:'#000000', width:'100%', paddingLeft:20}}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                ItemSeparatorComponent={separator}
                data={CartsDATA}
                keyExtractor={(item)=>item.id}
                renderItem={renderItem}
            />
        </ViewGroup>
    )
}

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  backgroundColor:'#000000',
  width: width,
  marginTop: 20,
})

const Separator = styled.View({
  paddingBottom:15,
})

const Title = styled.Text({
    color:'#ffffff',
    fontWeight: 'bold',
    fontSize: 28,
    fontStyle: 'italic'
})

export default CartScreen