import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import KisansetuLogo from '../../Src/Logo/KisansetuLogo.png'
const SecondScreen = ({navigation}) => {
  return (
    <View className='flex-1 items-center justify-center bg-white '>
      <Image source={KisansetuLogo} className='h-16 w-16'/>
      <Text className='text-green-700 text-xl'>KISAN<Text className='text-orange-500'>SETU</Text></Text>
        <Text className='font-medium text-lg mt-5 mb-5'>REGISTER TO KISANSETU</Text>

        <TouchableOpacity
        onPress={()=>navigation.navigate('third')}
      className='bg-emerald-600 h-10 w-9/12 items-center justify-center rounded-full'>
        <Text className='text-white'>PHONE NUMBER</Text>
        </TouchableOpacity>

        <View className='mt-5'>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('first')}
        className='flex-row'>
      <Ionicons name='language' size={16} color='gray'/>
      
      <Text className='ml-1'>Change the Language</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default SecondScreen