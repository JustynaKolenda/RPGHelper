import React from 'react'
import { Dimensions, FlatList, Image,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { SymbolData } from '../variables/SymbolData'


const SymbolScreen = () => {

    const onPress = ()=> {
        console.log('click')
    }

    const renderItem = ({ item }:any) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <Image style={{ width:50, height:50 }} source={{ uri: item.uri }} />
            </TouchableOpacity>
        )
    };

    const separator = () => (<Separator/>)


    return(
        <ViewGroup>
            <FlatList
                style={{ backgroundColor:'#000000', width:'100%', }}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                ItemSeparatorComponent={separator}
                data={SymbolData}
                keyExtractor={(item)=>item.id}
                horizontal={true}
                renderItem={renderItem}
            />
        </ViewGroup>
    )
}

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  backgroundColor:'#000000',
  paddingLeft: 10,
  paddingTop: 20,
  width: width,
  paddingBottom: 10
  
})

const Separator = styled.View({
  paddingTop:10,
  marginLeft: 20,
})

export default SymbolScreen