import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { SymbolsType } from '../variables/type';

interface ISymbolP{
    onPress: (id:string)=>void,
    item: SymbolsType
 } 

const SymbolScreen = (props :ISymbolP) => {

    return (
        <TouchableOpacity onPress={()=>props.onPress(props.item.id)}>
            <Image style={{ width:50, height:50 }} source={{ uri: props.item.uri }} />
        </TouchableOpacity>
    )
};

export default SymbolScreen