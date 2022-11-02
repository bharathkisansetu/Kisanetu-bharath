import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import KisansetuLogo from '../../../../Src/KisansetuLogo.png'
const Crop = ({navigation}) => {
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
        <View className='mr-24'><Text className='text-lg font-medium '>KisanSetu-SHOP</Text></View>
        
        
        <Image source={KisansetuLogo} className='h-8 w-8 mr-2'/>
        
      </View>
    </ScrollView>
  )
}

export default Crop