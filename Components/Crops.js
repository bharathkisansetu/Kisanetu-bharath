import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { crop } from '../data'
import CropItem from './CropItem'

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