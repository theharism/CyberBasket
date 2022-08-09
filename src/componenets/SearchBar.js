import React from "react";
import { View,StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,submitTerm}) => {

 return <View  style={style.BackgroundStyle}>

    <Ionicons name="ios-search" size={24} color="black" style={style.IconStyle}/>

    <TextInput
    Horizontal
    placeholder="Search Grocery"
    autoCorrect={false}
    autoCapitalize="none"
    value={term}
    onChangeText = {(newTerm) => onTermChange(newTerm)}
    returnKeyType='search'
    onEndEditing={submitTerm}
    style={style.TextInputStyle}
    />

</View>
};

const style = StyleSheet.create({

BackgroundStyle:{
borderColor:'transparent',
backgroundColor:'white',
height:40,
margin:20,
top:50,
borderRadius:10,
paddingHorizontal:50,
flexDirection:'row'
},
IconStyle:{
    position:'absolute',
    alignSelf:'center',
    fontSize:25,
    marginHorizontal:15
},
TextInputStyle:{
    fontSize:15,
    flex:1,
    marginHorizontal:10
}

})

export default SearchBar