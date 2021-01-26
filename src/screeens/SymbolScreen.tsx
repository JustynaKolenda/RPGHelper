import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { } from 'react-native';
import styled from 'styled-components/native';
import { CounterStoreContext } from '../store/store';
import { SymbolsType } from '../variables/type';

interface ISymbolP{
    item: SymbolsType
 } 

const SymbolScreen =  observer((props :ISymbolP) => {
    
    const CounterStore = useContext(CounterStoreContext)
    const handleChange = ()=> {
        CounterStore.setId(props.item.id)
    }
    const active =  CounterStore.active?.id

    return (
        <TouchBorder active={active} item={props.item} onPress={handleChange} >
            <BoxView>
                <SymbolImage source={{ uri: props.item.uri }} />
            </BoxView>
        </TouchBorder>
    )
});

interface ITouchP {
    item : SymbolsType,
    active : any
}
const TouchBorder = styled.TouchableOpacity({
    width: 50,
    height: 71,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
},(props : ITouchP)=>{
    let positionSymbol
    if(props.item.id == props.active){
       positionSymbol = {
           marginTop: 71 / 1.3
       }
    }
    return({
        ...positionSymbol
    })
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