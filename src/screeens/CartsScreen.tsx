import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, {  } from 'react'
import { Dimensions, FlatList, SafeAreaView, Text,} from 'react-native'
import styled from 'styled-components/native'
import { CounterStoreContext } from '../store/store'
import { CartsDATA } from '../variables/CartsData'
import { NavigationName } from '../variables/NavigationName'
import { CartsType } from '../variables/type'
import CartScreen from './CartScreen'

const CartsScreen =  observer(()=> {

    const navigation = useNavigation()
    const navToCartDesc = (item:CartsType) => {
        navigation.navigate(NavigationName.CARTDESCRIPTION,
        {itemId: item})
    }

    return(
        <SafeAreaView style={{backgroundColor:'#3C3D3E'}}>
        <ViewGroup>
            <FlatList
                style={{ backgroundColor:'#3C3D3E', width:'100%',marginLeft:10 }}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems:'center'}}
                data={CartsDATA}
                keyExtractor={(item)=>item.id}
                numColumns={3}
                renderItem={({item})=><CartScreen onPress={navToCartDesc} item={item} />}
            />
        </ViewGroup>
        </SafeAreaView>
    )
})

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  width: width,
  marginTop: 20,
  height: height/1.4,
})


export default CartsScreen