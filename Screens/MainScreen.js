import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FarmerLogo from '../Src/FarmerLogo.png'
import VendorLogo from '../Src/VendorLogo.png'
import ConsumerLogo from '../Src/ConsumerLogo.png'
import Logo from '../Src/KisansetuLogo.png'
const MainScreen = ({navigation}) => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
        <View className='mb-16'>
        <Image source={Logo} className="h-20 w-20 mt-3 p-4 ml-3 mr-3 "/>
        <Text className='text-green-700 text-xl'>KISAN<Text className='text-orange-500 text-xl'>SETU</Text></Text>
        </View>
        <View className='bg-gray-50 mb-3 rounded-xl'>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Farmermain')}
        className="mb-2"
        >
        <Image source={FarmerLogo} className="h-20 w-20 mt-3 p-4 ml-3 mr-3 "/>
            <Text className="ml-7">Farmer</Text>
        </TouchableOpacity>
        </View>
        <View className='bg-gray-50 mb-3 rounded-xl'>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Consumermain')}
        className="mb-2">
            <Image source={ConsumerLogo} className="h-20 w-20 mt-3 p-4 ml-3 mr-3 "/>
            <Text className="ml-5">Consumer</Text>
        </TouchableOpacity>
        </View>
        <View className='bg-gray-50 mb-20 rounded-xl'>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Vendormain')}
        className="mb-2"
        >
        <Image source={VendorLogo} className="h-20 w-20 mt-3 p-4 ml-3 mr-3 "/>
            <Text className="ml-7">Vendor</Text>
        </TouchableOpacity>
        </View>
        <View className='justify-center items-center '>
            <Text className='text-gray-500'>KisanSetu © Copyright 2021. All Rights Reserved</Text>
            <Text className='text-gray-400'>App Version 2.1</Text>
        </View>
    </View>
  )
}

export default MainScreen