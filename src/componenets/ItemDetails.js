import React from 'react'
import { Text,View,StyleSheet,Image } from 'react-native-web'
const ItemDetails = ({items}) => {
  return <View style={{showsHorizontalScrollIndicator:false}}>
    <Image style={{width:50,height:50}} source={{uri:'https://www.daldafoods.com/themes/frontend/img/home/dalda/DCO-Carton.png'}}/>
               <Text style={{fontWeight:'bold',fontSize:15,top:135,left:10}}>{items.Name}</Text>
               <View style={{flexDirection:'row',top:140,left:10}}>
               <Text>{items.Price}</Text>
               </View>
               </View>
}

export default ItemDetails