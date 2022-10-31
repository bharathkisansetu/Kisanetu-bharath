import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CropItem = ({item}) => {
  return (
    <TouchableOpacity>
    <View className='items-center mr-3 mt-1 justify-center h-20'>
        <View >
        <Image source={item.image} resizeMode='contain' className='h-14 w-14 rounded-full'/>
        </View>

      <View>
      <Text className='items-center justify-center text-center text-xs mt-1 font-bold text-black'>{item.name}</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default CropItem