import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Dimensions, Image, SafeAreaView, View,} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { CounterStoreContext } from '../../store/store'
import { CompareData } from '../../variables/CompareData'
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

    const CounterStore = useContext(CounterStoreContext)
    const uriSymbol = CounterStore.active?.id

    const Compare = CompareData.map((el)=>{
        if(el.idC == item.id && el.idS == uriSymbol){
            return el.description
        }
    })
  
    return(
        <ScrollView>
            <SafeAreaView style={{backgroundColor:'#ffffff'}}>
                <ViewGroup>
                    <CartScreen onPress={onPress} item={item} />
                    <ViewTitle> 
                        <TextShort>{Compare}</TextShort>
                    </ViewTitle>
                </ViewGroup>
                <ViewSeparator/>
                <View>
                    <ViewPuzelGroup>
                        <RandomPuzelTitle>Losowy puzel</RandomPuzelTitle>
                    </ViewPuzelGroup>
                    <GroupButton>
                        <TouchableOpacity>
                            <Refresh source={{uri: 'ic_refresh'}}/>
                        </TouchableOpacity>
                    </GroupButton>
                    <VieGroupDesc>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum nec quam sed posuere.
                            Sed cursus orci id convallis sollicitudin. Fusce egestas justo at ex consectetur tempus.
                            Praesent tincidunt felis ipsum, eu commodo risus lacinia efficitur. Aliquam accumsan dictum vulputate.
                            Praesent facilisis dui interdum, volutpat turpis vel, volutpat metus. Donec vel nibh urna.
                            Fusce eu imperdiet purus. Aliquam eu lacus non lacus blandit consequat a eget eros.
                            In rutrum dolor vel velit fringilla, sed commodo velit tempor. Ut gravida purus nulla, quis faucibus magna luctus non. 
                            Pellentesque pellentesque sodales lacus vitae rhoncus. Aliquam at dolor in diam gravida congue.
                            Maecenas commodo quam et nisl maximus, et sodales velit suscipit. In maximus eu velit eget pretium. 
                            Etiam efficitur eget tellus sagittis accumsan. Pellentesque eu ipsum sit amet sem consequat aliquet ut et leo.
                            Phasellus ipsum ante, rutrum sit amet tincidunt non, viverra vitae magna. Nullam rutrum eros sit amet mollis porta.
                            Vestibulum a leo lacinia, volutpat diam ut, placerat dui.
                        </Description>
                    </VieGroupDesc>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
})

const {width, height} = Dimensions.get('window')
const ViewGroup = styled.View({
  width: width,
  marginTop: 20,
  height: 164,
  backgroundColor: '#ffffff',
  borderBottomColor: '#707070',
  borderBottomWidth: 1,
  flexDirection: 'row',
  justifyContent:'center',
  textAlign:'center'
})

const ViewSeparator = styled.View({
    paddingBottom:2,
    backgroundColor: '#ffffff'
})

const TextShort = styled.Text({
    fontSize: 14,
    fontStyle: 'italic',
    color: '#4E4F4F',
    fontFamily: 'Raleway',
})

const ViewTitle = styled.View({
    justifyContent:'center',
    width:width/2, 
    bottom: 20
})

const ViewPuzelGroup = styled.View({
    backgroundColor:"#000000",
    paddingTop:16,
    paddingBottom: 9,
    paddingLeft:16
})

const VieGroupDesc = styled.View ({
    backgroundColor:'#3C3D3E',
    height:height,
    paddingTop:22,
    paddingLeft:16,
    paddingRight:16,
})

const RandomPuzelTitle = styled.Text({
    color:'#FFFFFF',
    fontFamily:'PerryGothic',
    fontSize:16,
    fontWeight: 300
})

const Description = styled.Text({
    color:'#ffffff',
    fontSize:16,
    textAlign:'left',
    justifyContent:'center',
    fontFamily: 'Raleway',
})

const GroupButton = styled.View({
    position:'absolute',
    right:0 ,
    top:8,
    zIndex:2,
    height:56
})

const Refresh = styled.Image({
    aspectRatio:'1',
    height:'100%'
})


export default ScreenOfCardDesc