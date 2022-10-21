import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import KisansetuLogo from '../../Src/assets/KisansetuLogo.png'

const ThirdScreen = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white ml-5 mr-5'>
      <Image source={KisansetuLogo} className='h-16 w-16'/>
      <Text className='text-green-700 text-xl'>KISAN<Text className='text-orange-500'>SETU</Text></Text>
        <Text className='font-medium text-lg mt-5 mb-5'>YOUR PHONE NUMBER</Text>
        <View className='items-start mb-7'>
            <Text className='text-xs text-gray-400'>Enter your Phone Number</Text>
        <TextInput className='text-gray-300 text-lg' placeholder='Your Mobile Number'/>
        <Text className='text-gray-200'>____________________________________________________</Text>
        </View>
        
        <TouchableOpacity
      className='bg-green-700 h-10 w-full items-center justify-center rounded-full mb-2'>
        <Text className='text-white'>NEXT</Text>
        </TouchableOpacity>
        <View className='items-center justify-center'>
        <Text className='text-xs ml-2 text-gray-500'>Tap Next to verify your account. An SMS may be sent to verify your number. Message and data rates may apply</Text>
        </View>
    </View>
  )
}

export default ThirdScreen