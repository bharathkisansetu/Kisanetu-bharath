import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import bharath from '../Src/bharath.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'

const UserView =() =>{
    return(
        <View className='bg-emerald-500 h-20 items-center  flex-row'>
            <Image source={bharath} className='w-10 h-10 ml-3 mr-3 rounded-full border-black border-8 mb-2'/>
            <View className='flex-col'>
                <Text className='text-white font-bold ml-2'>Bharath</Text>
            <View className='flex-row'>
            <Ionicons name='location' size={15} color='#e0ffff'/><Text className='ml-1'>Bangalore</Text>
            </View>
            
            </View>
        </View>
    )
}

const CustomDrawer = (props) => {
  return (
     <View className='flex-1'>
    <UserView />

    <DrawerContentScrollView {...props}>
    <DrawerItemList {...props}/>
    </DrawerContentScrollView>

     <View className='items-center justify-center mb-5'>
         <Text className='text-black'>KisanSetu App Version 2.1</Text>
     </View>
   
     </View>
  )
}

export default CustomDrawer