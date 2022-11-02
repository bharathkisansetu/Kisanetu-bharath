import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { cropitem } from '../../data'
import CropItemList from './CropItemList'

const CropList = () => {
  return (
    <View>
      <FlatList
      data={cropitem}
      renderItem={({item})=> <CropItemList item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default CropList