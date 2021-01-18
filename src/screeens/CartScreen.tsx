import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { CartsType } from '../variables/type';

 interface ICartP{
    onPress: (id:string)=>void,
    item: CartsType
 } 

const CartScreen = ( props: ICartP) => {

    return (
        <TouchableOpacity onPress={()=>props.onPress(props.item.id)}>
            <Title>{props.item.title}</Title>
        </TouchableOpacity>
    )
};

const Title = styled.Text({
    color:'#ffffff',
    fontWeight: 'bold',
    fontSize: 28,
    fontStyle: 'italic'
})

export default CartScreen