import { View, Text,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Adding = () => {
    const {params:{
        id,
        image,
        title,
        Totalyield,
        Duration 
    }} = useRoute()
  return (
    <View >
        <View className='items-center mt-2'>
            <Text className="text-2xl text-black font-bold">Pick Crop</Text>
            <Text className="text-lg">Choose the Crop which you want to grow</Text>
        </View>
        <View className='mt-5 flex-row bg-white'>
        <Image source={image} className='h-16 w-16 ml-3 mr-3'/>
      <Text className='font-bold text-sm'>{title}</Text>
        </View>
        <View className=' bg-white h-12 flex-row mt-1'>
        <Text className='text-lg mt-3 ml-3 text-black'>Farm Land <Text className='text-red-500'>*</Text></Text>
        
      </View>

      <View className=' bg-white h-12 flex-row mt-1'>
        <Text className='text-lg mt-3 ml-3 text-black'>No of Acre <Text className='text-red-500'>*</Text></Text>
        
      </View>

      <View className=' bg-white h-12 flex-row mt-1'>
        <Text className='text-lg mt-3 ml-3 text-black'>Sowing on <Text className='text-red-500'>*</Text></Text>
        
      </View>

      <View className=' bg-white h-12 flex-row mt-1'>
        <Text className='text-lg mt-3 ml-3 text-black'>Duration <Text className='text-red-500'>*</Text></Text>
        
      </View>

      <View className=' bg-white h-12 flex-row mt-1'>
        <Text className='text-lg mt-3 ml-3 text-black'>Organic <Text className='text-red-500'>*</Text></Text>
        
      </View>
      <View className='items-center'>
        <TouchableOpacity
      //onPress={()=>navigation.navigate('second')}
      className='bg-emerald-600 h-10 mt-8 w-9/12 items-center justify-center rounded-full'>
        <Text className='text-white'>ADD CROP</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Adding