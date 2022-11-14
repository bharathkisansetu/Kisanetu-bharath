import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import KisansetuLogo from '../../Src/Logo/KisansetuLogo.png'
const FirstScreen = ({navigation}) => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Image source={KisansetuLogo} className='h-16 w-16'/>
      <Text className='text-green-700 text-xl'>KISAN<Text className='text-orange-500'>SETU</Text></Text>
      <Text className='font-medium text-lg mt-5 mb-5'>Choose Your Language</Text>
      <View className=' mb-5'>
        <TouchableOpacity className='flex-row'>
      <Text className='mr-24'>Application language</Text>
      <Text className='text-gray-500 mr-3'>English</Text>
      <Ionicons name='chevron-forward-sharp' size={20} color='gray'/>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate('second')}
      className='bg-emerald-600 h-10 w-9/12 items-center justify-center rounded-full'>
        <Text className='text-white'>PROCEED</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FirstScreen