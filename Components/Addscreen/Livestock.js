import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { livestock } from '../../data'
import LivestockList from './LivestockList'

const Livestock = () => {
  return (
    <View>
      <FlatList data={livestock}
      renderItem={({item})=> <LivestockList item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Livestock