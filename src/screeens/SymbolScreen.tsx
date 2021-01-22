import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { SymbolsType } from '../variables/type';

interface ISymbolP{
    onPress: (id:string)=>void,
    item: SymbolsType
 } 

const SymbolScreen = (props :ISymbolP) => {

    return (
        <TouchBorder onPress={()=>props.onPress(props.item.id)}>
            <BoxView>
                <SymbolImage source={{ uri: props.item.uri }} />
            </BoxView>
        </TouchBorder>
    )
};

const TouchBorder = styled.TouchableOpacity({
    width: 50,
    height: 71,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
})

const BoxView = styled.View({
    borderWidth: 1,
    borderColor: '#3C3D3E',
    borderRadius: 5,
    height: 65,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center'
})
const SymbolImage = styled.Image({
    width:38,
    height:34
})

export default SymbolScreen