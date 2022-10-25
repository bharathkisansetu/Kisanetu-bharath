import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const VerifyScreen = ({navigation}) => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='font-bold text-2xl'>Verify Now</Text>
      <Text className='font-bold'>We sent a verification code on your number</Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate('mainscreen')}
      className='bg-emerald-600 h-10 w-9/12 items-center justify-center rounded-full mb-2'>
        <Text className='text-white '>VERIFY</Text>
        </TouchableOpacity>
    </View>
  )
}

export default VerifyScreen