import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import KisansetuLogo from '../../Src/assets/KisansetuLogo.png'
import {Feather} from '@expo/vector-icons'
const FirstScreen = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white ml-5 mr-5'>
        <Image source={KisansetuLogo} className='h-16 w-16'/>
        
        <Text className='text-green-700 text-xl'>KISAN<Text className='text-orange-500'>SETU</Text></Text>
        
      
      <Text className='font-medium text-lg mt-5 mb-5'>Choose Your Language</Text>
      <View className=' mb-5'>
        <TouchableOpacity className='flex-row'>
      <Text className='mr-24'>Application language</Text>
      <Text className='text-gray-500 mr-3'>English</Text>
      <Feather name='chevron-right' size={20} color='gray'/>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
      className='bg-green-700 h-10 w-full items-center justify-center rounded-full'>
        <Text className='text-white'>PROCEED</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FirstScreen