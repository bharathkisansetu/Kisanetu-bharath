import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import bharath from '../../../Src/bharath.jpg'
import FarmerLogo from '../../../Src/FarmerLogo.png'
const EditProfile = () => {
  return (
    <ScrollView className='bg-lime-100'>
    <View className='items-center justify-center'>
      <Text className='text-2xl font-bold p-1 text-black'>Profile Information</Text>
    </View>
    <View className='items-center justify-center mb-3'>
        <Text className='text-lg'>Farmer / Consumer basic Information</Text>
    </View>
    <View className='items-center justify-center'>
        <TouchableOpacity >
            <Image source={FarmerLogo} style={styles.circle} />
        </TouchableOpacity>
    </View>

    <View className='p-3'>
        <Text className='text-lg'>Basic Information</Text>
    </View>

    <View className=' bg-emerald-100 h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>First Name <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='First Name' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-emerald-100 h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Last Name <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Last Name' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-emerald-100 h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Email Id <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Email Id' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-emerald-100 h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Mobile Number <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Mobile Number' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className='p-3'>
        <Text className='text-lg'>Address Information</Text>
    </View>

    <View className=' bg-emerald-100 h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Address <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Enter your address' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-emerald-100 h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Pincode <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Pincode' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className='p-3'>
        <Text className='text-lg'>About Farmer</Text>
    </View>

    <View className=' bg-emerald-100 h-36 '>
        <Text className='text-sm mt-3 ml-3 text-black'>About me <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='About me' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className='items-center justify-center mt-10 mb-14'>
      <TouchableOpacity
      
      className='bg-emerald-600 h-10 w-9/12 items-center justify-center rounded-full'>
        <Text className='text-white'>UPDATE INFORMATION</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    circle:{
        height:150,
        width:150,
        borderWidth:4,
        borderRadius:50,
        marginBottom:30,
        borderColor:'orange'
    }
})

export default EditProfile