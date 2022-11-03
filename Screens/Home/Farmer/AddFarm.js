import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const AddFarm = () => {
  return (
    <ScrollView className=' bg-lime-100'>
      <Text className='text-xl font-medium p-3 mt-6 '>Basic Information</Text>
      <Text className='mb-6 ml-3 '>Manditory fields are marked as <Text className='text-red-500 '>*</Text></Text>
      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>Farm Name <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Farmer Name                     ' className='ml-7 text-xl border-b-2 border-gray-400'/>
        </View>

      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>Enter in Acre <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Enter in acre                       ' className='ml-5 text-xl border-b-2 border-gray-400'/>
      </View>

      <Text className='text-xl font-medium p-3 '>Address Information</Text>

      <View className=' bg-emerald-100 h-21 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Address <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Enter in Acre' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-emerald-100 h-24'>
        <Text className='text-sm mt-3 ml-3 text-black'>Pincode <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Enter Pincode' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <Text className='text-xl font-medium p-3'>Livestock Information</Text>

      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>Cattle</Text>
        <TextInput placeholder='No of Cattle                       ' className='ml-24 text-xl border-b-2 border-gray-400'/>
      </View>

      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>About Cattle</Text>
        <TextInput placeholder='About Cattle                      ' className='ml-10 text-xl border-b-2 border-gray-400'/>
      </View>

      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>Sheep</Text>
        <TextInput placeholder='About Cattle                      ' className='ml-24 text-xl border-b-2 border-gray-400'/>
      </View>

      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>Goat</Text>
        <TextInput placeholder='No of Goat                         ' className='ml-28 text-xl border-b-2 border-gray-400'/>
      </View>

      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>About Goat</Text>
        <TextInput placeholder='About Goat                       ' className='ml-14 text-xl border-b-2 border-gray-400'/>
      </View>

      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>Poultry</Text>
        <TextInput placeholder='Poultry                              ' className='ml-24 text-xl border-b-2 border-gray-400'/>
      </View>
      
      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>About Poultry</Text>
        <TextInput placeholder='About Poultry                  ' className='ml-10 text-xl border-b-2 border-gray-400'/>
      </View>

      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>Fish</Text>
        <TextInput placeholder='Fish                                  ' className='ml-32 text-xl border-b-2 border-gray-400'/>
      </View>

      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>About Fish</Text>
        <TextInput placeholder='About Fish                       ' className='ml-16 text-xl border-b-2 border-gray-400'/>
      </View>

      <Text className='text-xl font-medium p-3 '>Farm Information</Text>
      <View className='flex-row bg-emerald-100 h-20 p-3'>
        <Text className='text-xl mt-3 text-black'>About Farm <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='About Farm                    ' className='ml-12 text-xl border-b-2 border-gray-400'/>
      </View>

      <View className='items-center justify-center mt-8 mb-14'>
      <TouchableOpacity
      
      className='bg-emerald-600 h-10 w-9/12 items-center justify-center rounded-full'>
        <Text className='text-white'>ADD FARM</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default AddFarm