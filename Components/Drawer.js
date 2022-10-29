import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import bharath from '../Src/bharath.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'

const UserView =() =>{
    return(
        <View className='bg-emerald-400 h-40 items-center justify-center'>
            <Image source={bharath} className='w-20 h-20 rounded-full border-black border-8 mb-2'/>
            <Text className='text-white font-bold'>Bharath</Text>
            <View className='flex-row'>
            <Ionicons name='location-outline' size={15} color='gray'/><Text className='ml-1'>Bangalore</Text>
            </View>
        </View>
    )
}

const Drawer = (props) => {
  return (
    <View className='flex-1'>
        
        
    <UserView />
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}
         
        />
    </DrawerContentScrollView>
    <View className='items-center justify-center mb-5'>
        <Text className='text-black'>KisanSetu App Version 2.1</Text>
    </View>
   
    </View>
  )
}


export default Drawer