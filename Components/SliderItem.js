import { View, Text,Image,Dimensions, StyleSheet } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('screen')
const SliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} resizeMode='contain' style={styles.image}/>
    </View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
    container:{
        width,
        height,
        alignItems:'center',
        marginTop:5,
        
    },
    image:{
        width:'100%',
        flex:0.2,
        
    },
})