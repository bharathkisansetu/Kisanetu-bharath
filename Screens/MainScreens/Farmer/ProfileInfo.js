import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import FarmerLogo from '../../../Src/Logo/FarmerLogo.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
const ProfileInfo = ({navigation}) => {
  return (
    <ScrollView>
      {/* Header = start */}
      <View style={{backgroundColor:'white', height:40,alignItems:'center', justifyContent:'center', flexDirection:'row' }}>
        <TouchableOpacity
       onPress={()=>navigation.goBack()}
        className='items-center justify-center ml-3'
        >
          <Ionicons name='arrow-back' size={20} color='#00CCBB'/>
        </TouchableOpacity>
        <View style={{flex:1}}>
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>EDIT ACCOUNT</Text>

        </View>
      </View>

      {/* Header = End */}
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontWeight:'700', fontSize:25, color:'black', marginTop:10}}>Profile Information</Text>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', marginBottom:10,marginTop:10}}>
            <Text style={{fontWeight:'400', fontSize:15, color:'black',}}>Farmer / Consumer basic Information</Text>
        </View>
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity >
                <Image source={FarmerLogo} style={styles.circle} />
            </TouchableOpacity>
        </View>
        <View style={{padding:10,}}>
            <Text className='text-lg'>Basic Information</Text>
        </View>

        <View className=' bg-white h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>First Name <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='First Name' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-white h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Last Name <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Last Name' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-white h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Email Id <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Email Id' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-white h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Mobile Number <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Mobile Number' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className='p-3'>
        <Text className='text-lg'>Address Information</Text>
    </View>

    <View className=' bg-white h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Address <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Enter your address' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className=' bg-white h-24 '>
        <Text className='text-sm mt-3 ml-3 text-black'>Pincode <Text className='text-red-500'>*</Text></Text>
        <TextInput placeholder='Pincode' className='text-xl ml-2 border-b-2 border-gray-400'/>
      </View>

      <View className='p-3'>
        <Text className='text-lg'>About Farmer</Text>
    </View>

    <View className=' bg-white h-36 '>
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
export default ProfileInfo