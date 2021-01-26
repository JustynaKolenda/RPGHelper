import React, { useContext } from 'react'
import { Image, Platform, } from 'react-native';
import styled from 'styled-components/native';
import { CounterStoreContext } from '../store/store';
import { CartsType } from '../variables/type';
import { observer } from 'mobx-react-lite'
 interface ICartP{
    onPress: (id:CartsType)=>void,
    item: CartsType
 } 

const CartScreen = observer(( props: ICartP) => {

    const CounterStore = useContext(CounterStoreContext)
    const uriSymbol = CounterStore.active?.uri

    
    return (
        <TouchBox onPress={()=>props.onPress(props.item)}>
            <ViewBorder>
                <PositionTitleTop>
                    <Title>{props.item.title}</Title>
                </PositionTitleTop>
                <PositionSymbol>
                    <IcSymbol source={{uri: uriSymbol }}/>
                </PositionSymbol>
                <PositionTitleBottom>
                    <TitleBottom>{props.item.title}</TitleBottom>
                </PositionTitleBottom>
            </ViewBorder>
        </TouchBox>
    )
});

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
    alignItems:'center',
    height: 136
})

const ViewBorder = styled.View({
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    height: 127
})

const PositionTitleTop = styled.View({
    marginTop: (Platform.OS == 'ios')? 5 : 0,
    marginLeft: 11
})

const Title = styled.Text({
    color:'#000000',
    fontSize: 21,
    fontFamily: 'PerryGothic',
    fontWeight: 400,
    paddingTop: 10
})

const PositionSymbol = styled.View({
    justifyContent: 'center',
    alignItems: 'center'
})

const IcSymbol = styled.Image({
    width: 37,
    height: 33,
    marginTop: (Platform.OS == 'ios')? 7 : 5
})

const PositionTitleBottom = styled.View({
    alignItems: 'flex-end',
    marginRight: 7,
    zIndex:2,
    bottom: (Platform.OS== 'ios')? -10 : -2
})

const TitleBottom = styled.Text({
    color:'#000000',
    fontSize: 21,
    fontFamily: 'PerryGothic',
    fontWeight: 400,
    transform: 'rotate(180deg)',
    paddingTop: (Platform.OS == 'ios')? 10 : 0
})


export default CartScreen