import React from 'react'
import { Text, View ,FlatList, StyleSheet,Image,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ItemDetails from './ItemDetails';
import SingleItem from './SingleItem';

const Items = ({results,navigation}) => {

  return (
    <View  style={styles.ViewStyle} >
         <FlatList
        data = {results}
        keyExtractor ={(res) => res.ID}
        renderItem={({item}) => {
            return <View style={styles.ListStyle}>
              <TouchableOpacity onPress={()=>{navigation.navigate('SingleItem'),{name:item.name}}}>
                <ItemDetails items={item} />
              </TouchableOpacity>
               </View>
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({

  ListStyle:{
    marginBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    paddingBottom:150

  },
  ViewStyle:{
    top:0,
    // borderColor:'black',
    // borderWidth:2,
    marginHorizontal:5,
    width:180
  }

});

export default Items;