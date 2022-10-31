import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { market } from '../data'
import MarketItem from './MarketItem'

const Market = () => {
  return (
    <View>
      <FlatList 
      data={market}
      renderItem={({item})=> <MarketItem item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Market