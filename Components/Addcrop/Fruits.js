import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fruits } from '../../data'
import FruitsList from './FruitsList'

const Fruits = () => {
  return (
    <View>
      <FlatList
      data={fruits} 
      renderItem={({item})=> <FruitsList item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Fruits