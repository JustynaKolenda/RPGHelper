import React, { useState } from 'react'
import { Dimensions, FlatList,} from 'react-native'
import styled from 'styled-components/native'
import { CartsDATA } from '../variables/CartsData'
import CartScreen from './CartScreen'

const CartsScreen = ()=> {
    const onPress = (id:string)=> {
        return console.log(id)
    }
    const separator = () => (<Separator/>)

    return(
        <ViewGroup>
            <FlatList
                style={{ backgroundColor:'#000000', width:'100%', paddingLeft:20}}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                ItemSeparatorComponent={separator}
                data={CartsDATA}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><CartScreen item={item} onPress={onPress}/>}
            />
        </ViewGroup>
    )
}

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  backgroundColor:'#000000',
  width: width,
  marginTop: 20,
  height:'80%'
})

const Separator = styled.View({
  paddingBottom:15,
  borderBottomWidth: 1,
  borderBottomColor: '#ffffff'
})

export default CartsScreen