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
        <TouchBox onPress={()=>props.onPress(props.item.id)}>
            <ViewBorder>
                <Title>{props.item.title}</Title>
            </ViewBorder>
        </TouchBox>
    )
};

const TouchBox = styled.TouchableOpacity({
    width: 90,
    height: 127,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginRight: 29,
    marginBottom: 34,
    justifyContent:'center',
    alignItems:'center'
})

const ViewBorder = styled.View({
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    height: '90%',
    justifyContent:'center',
    alignItems:'center'
})

const Title = styled.Text({
    color:'#000000',
    fontWeight: 'bold',
    fontSize: 28,
    fontStyle: 'italic'
})

export default CartScreen