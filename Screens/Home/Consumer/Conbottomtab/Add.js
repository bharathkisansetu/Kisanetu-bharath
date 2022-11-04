import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import KisansetuLogo from '../../../../Src/KisansetuLogo.png'
const Add = ({navigation}) => {
  return (
    <ScrollView  className='bg-lime-100'>
      {/* Start of the header section  */}
      <View className='bg-white h-10 justify-center items-center flex-row'>
        <TouchableOpacity 
        onPress={()=>{
            navigation.openDrawer()
        }}
        className='ml-2 flex-1'>
            <Ionicons name='reorder-three-outline' size={25} color='#00CCBB'  />
            </TouchableOpacity>
        <View className='mr-16'><Text className='text-lg font-medium '>Add Consumer Information</Text></View>
        
        
        <Image source={KisansetuLogo} className='h-8 w-8 mr-2'/>
        
      </View>
      <View className='p-3 mt-5'>
        <TouchableOpacity>
          <Text className='text-lg text-black'>Buisness Type</Text>
        </TouchableOpacity>
      </View>
      <View className=' bg-emerald-100 h-21 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Company / Shop Name</Text>
        <TextInput placeholder='Company / Shop Name' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className='bg-emerald-100 h-21 '>
        <Text className='text-sm mt-3 ml-3 text-black'>GSTIN number</Text>
        <TextInput placeholder='Enter your GSTIN Number' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-emerald-100 h-21 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Pincode</Text>
        <TextInput placeholder='Enter your pincode' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-emerald-100 h-21 '>
        <Text className='text-sm mt-3 ml-3 text-black'>About Shop</Text>
        <TextInput placeholder='About Shop' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>
        <View className='items-center justify-center mt-14'>
      <TouchableOpacity
      // onPress={()=>navigation.navigate('second')}
      className='bg-emerald-600 h-10 w-9/12 items-center justify-center rounded-full'>
        <Text className='text-white'>ADD BUYER</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Add