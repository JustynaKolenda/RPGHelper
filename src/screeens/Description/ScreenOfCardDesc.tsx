import { observer } from 'mobx-react-lite'
import React, { useContext,  } from 'react'
import { Dimensions, Platform, SafeAreaView, Text,} from 'react-native'
import styled from 'styled-components/native'
import { CounterStoreContext } from '../../store/store'
import { CartsDATA } from '../../variables/CartsData'
import { CartsType, CompareType } from '../../variables/type'
import CartScreen from '../CartScreen'

interface IScreenOfCardDescP {
    compareItem : CompareType,
    route: any
}

const ScreenOfCardDesc =  observer((props: IScreenOfCardDescP)=> {
    const item = props.route.params.itemId
    const onPress = (item:CartsType)=> {
        return item
    }
  
    return(
        <SafeAreaView style={{backgroundColor:'#000000'}}>
        <ViewGroup>
            <CartScreen onPress={onPress} item={item} />
        </ViewGroup>
        </SafeAreaView>
    )
})

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  width: width,
  marginTop: 20,
  height: 164,
  backgroundColor: '#ffffff',
  borderBottomColor: '#707070',
  borderBottomWidth: 1
})

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
    marginTop: 10,
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
    width: 35,
    height: 32,
    marginBottom: 8.5,
})

const PositionTitleBottom = styled.View({
    alignItems: 'flex-end',
    marginRight: 7,
})

const TitleBottom = styled.Text({
    color:'#000000',
    fontSize: 21,
    fontFamily: 'PerryGothic',
    fontWeight: 400,
    transform: 'rotate(180deg)',
    paddingTop: (Platform.OS)? 10 : 0,
    
})



export default ScreenOfCardDesc