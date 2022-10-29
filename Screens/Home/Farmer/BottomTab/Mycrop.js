import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import KisansetuLogo from '../../../../Src/KisansetuLogo.png'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Mycrop = ({navigation}) => {
  return (
    <View>
      <View className='bg-white h-10 items-center flex-row'>
        <TouchableOpacity 
        onPress={()=>{
            navigation.openDrawer()
        }}
        className='ml-2 flex-1'>
            <Ionicons name='reorder-three-outline' size={20} color='#00CCBB' className='ml-3' />
            </TouchableOpacity>
        <View className='flex-1'><Text className='text-lg font-medium '>MY CROP</Text></View>
        
        <Ionicons name='call-outline' size={20} color='#00CCBB' />
        <Image source={KisansetuLogo} className='ml-4 h-7 w-7'/>
        
      </View>
    </View>
  )
}

export default Mycrop