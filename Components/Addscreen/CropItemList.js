import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CropItemList = ({item, navigation}) => {
  return (
    <TouchableOpacity className='p-2 items-center'
    // onPress={()=>navigation.navigate('Farming')}
    >
       
      <Image source={item.image} className='h-14 w-14 rounded-full'/>
      <Text className='items-center text-xs font-bold'>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default CropItemList