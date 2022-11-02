import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ConItem = ({item}) => {
  return (
    <TouchableOpacity className='items-center mr-3 mt-1 justify-center h-20'>
      <Image source={item.image} className='h-14 w-14 rounded-full'/>
      <Text className='items-center justify-center text-center text-xs mt-1 font-bold text-black'>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default ConItem