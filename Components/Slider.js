import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SliderItem from './SliderItem'
import Slides from '../data'
const Slider = () => {
  return (
    <View>
      <FlatList data={Slides} 
      renderItem={({item})=> <SliderItem item={item} />}
      horizontal
      pagingEnabled
      snapToAlignment='center'
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Slider