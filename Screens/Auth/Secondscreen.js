import { View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import KisansetuLogo from '../../Src/assets/KisansetuLogo.png'
import {Ionicons} from '@expo/vector-icons'

const Secondscreen = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white ml-5 mr-5'>
     <Image source={KisansetuLogo} className='h-16 w-16'/>
        
        <Text className='text-green-700 text-xl'>KISAN<Text className='text-orange-500'>SETU</Text></Text>
        <Text className='font-medium text-lg mt-5 mb-5'>REGISTER TO KISANSETU</Text>

        <TouchableOpacity
      className='bg-green-700 h-10 w-full items-center justify-center rounded-full'>
        <Text className='text-white'>PHONE NUMBER</Text>
        </TouchableOpacity>
        <View className='mt-5'>
        <TouchableOpacity className='flex-row'>
      <Ionicons name='language' size={16} color='gray'/>
      
      <Text className='ml-1'>Change the Language</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Secondscreen