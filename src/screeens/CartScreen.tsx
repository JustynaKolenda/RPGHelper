import React from 'react'
import { Image, } from 'react-native';
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
                <PositionTitleTop>
                    <Title>{props.item.title}</Title>
                </PositionTitleTop>
                <PositionSymbol>
                    <IcSymbol source={{uri:'ic_trefl' }}/>
                </PositionSymbol>
                <PositionTitleBottom>
                    <Title>{props.item.title}</Title>
                </PositionTitleBottom>
            </ViewBorder>
        </TouchBox>
    )
};

const TouchBox = styled.TouchableOpacity({
    width: 90,
    paddingTop: 5,
    paddingBottom: 5,
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
    // height: '90%',

})

const PositionTitleTop = styled.View({
    marginTop: 10,
    marginLeft: 11
})

const Title = styled.Text({
    color:'#000000',
    fontSize: 21,
    fontFamily: 'PerryGothic',
    fontWeight: 400,
})

const PositionSymbol = styled.View({
    justifyContent: 'center',
    alignItems: 'center'
})

const IcSymbol = styled.Image({
    width: 39,
    height: 36,
    marginBottom: 8.5
})

const PositionTitleBottom = styled.View({
    alignItems: 'flex-end',
    marginRight: 7
})


export default CartScreen