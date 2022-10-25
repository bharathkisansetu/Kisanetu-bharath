import { Text, TouchableOpacity, Image, SafeAreaView, View } from 'react-native'
import FarmerLogo from '../../Src/assets/FarmerLogo.png'
import VendorLogo from '../../Src/assets/VendorLogo.png'
import ConsumerLogo from '../../Src/assets/ConsumerLogo.png'
import Logo from '../../Src/assets/KisansetuLogo.png'
import React, { useLayoutEffect } from 'react'


const MainScreen = ({navigation}) => {
  return (

    <View className='flex-1 items-center justify-center bg-white'>
        <View className='mb-16'>
        <Image source={Logo} className="h-20 w-20 mt-3 p-4 ml-3 mr-3 "/>
        <Text className='text-green-700 text-xl'>KISAN<Text className='text-orange-500 text-xl'>SETU</Text></Text>
        </View>
        <View className='bg-gray-50 mb-3 rounded-xl'>
        <TouchableOpacity
        onPress={()=>navigation.navigate('farmerscreen')}
        className="mb-2"
        >
        <Image source={FarmerLogo} className="h-20 w-20 mt-3 p-4 ml-3 mr-3 "/>
            <Text className="ml-7">Farmer</Text>
        </TouchableOpacity>
        </View>
        <View className='bg-gray-50 mb-3 rounded-xl'>
        <TouchableOpacity
        onPress={()=>navigation.navigate('consumerscreen')}
        className="mb-2">
            <Image source={ConsumerLogo} className="h-20 w-20 mt-3 p-4 ml-3 mr-3 "/>
            <Text className="ml-5">Consumer</Text>
        </TouchableOpacity>
        </View>
        <View className='bg-gray-50 mb-20 rounded-xl'>
        <TouchableOpacity
        onPress={()=>navigation.navigate('vendorscreen')}
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