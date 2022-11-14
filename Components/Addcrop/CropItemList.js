import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CropItemList = ({item, navigation}) => {
  const naviagtion = useNavigation
  return (
    <TouchableOpacity className='p-2 items-center'
     onPress={()=>{
      naviagtion.navigate('SELECT CROP')
     }}
    >
       
      <Image source={item.image} className='h-14 w-14 rounded-full'/>
      <Text className='items-center text-xs font-bold'>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default CropItemList