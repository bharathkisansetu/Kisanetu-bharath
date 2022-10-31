import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MarketItem = ({item}) => {
  return (
    <TouchableOpacity>
    <View className='mr-10 mt-2'>
      <Image source={item.image} resizeMode='contain' className='h-20 w-20'/>
      <Text className='font-medium'>{item.name}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default MarketItem