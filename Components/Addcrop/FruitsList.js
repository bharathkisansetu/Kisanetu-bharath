import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const FruitsList = ({item}) => {
  return (
    <TouchableOpacity className='p-2 items-center'>
      <Image
      source={item.image} 
      className='h-14 w-14 rounded-full'
      />
      <Text className='items-center text-xs font-bold'>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default FruitsList