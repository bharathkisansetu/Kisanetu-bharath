//this is the section for the consumer list

import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ConsumerItem from '../Components/ConsumerItem'
import { consumer } from '../data'

const Consumer = () => {
  return (
    <View>
      <FlatList 
      data={consumer}
      renderItem={({item})=> <ConsumerItem item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Consumer