import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { vegetable } from '../../data'
import VegeList from './VegeList'

const Vege = () => {
  return (
    <View>
      <FlatList 
      data={vegetable}
      renderItem={({item})=> <VegeList item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Vege