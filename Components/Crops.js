import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CropItem from '../Components/CropItem'
import { crop } from '../data'

const Crops = () => {
  return (
    <View>
       <FlatList
      data={crop}
      renderItem={({item})=> <CropItem item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      /> 
      
    </View>
  )
}

export default Crops