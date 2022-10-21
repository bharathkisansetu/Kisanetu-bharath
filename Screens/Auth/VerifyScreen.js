import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const VerifyScreen = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white ml-5 mr-5'>
      <Text className='font-bold text-lg'>Verify Now</Text>
      <Text>we sent a verification code on your number</Text>
      <TouchableOpacity
      className='bg-green-700 h-10 w-full items-center justify-center rounded-full mb-2'>
        <Text className='text-white'>VERIFY</Text>
        </TouchableOpacity>
    </View>
  )
}

export default VerifyScreen