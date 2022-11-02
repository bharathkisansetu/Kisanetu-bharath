import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { pulses } from '../../data'
import PulsesList from './PulsesList'

const Pulses = () => {
  return (
    <View>
      <FlatList 
      data={pulses}
      renderItem={({item})=> <PulsesList item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}

export default Pulses