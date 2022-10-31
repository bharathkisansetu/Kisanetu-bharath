import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import KisansetuLogo from '../../../../Src/KisansetuLogo.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Colors} from '../../../../Constants/Colors'
import Slider from '../../../../Components/Slider'
import Crops from '../../../../Components/Crops'
import Consumer from '../../../../Components/Consumer'
import Market from '../../../../Components/Market'
import Blogs from '../../../../Components/Blogs'

const Farmer = ({navigation}) => {
  
  return (
    <ScrollView>
      {/* Start of the header section  */}
      <View className='bg-white h-10 items-center flex-row'>
        <TouchableOpacity 
        onPress={()=>{
            navigation.openDrawer()
        }}
        className='ml-2 flex-1'>
            <Ionicons name='reorder-three-outline' size={25} color='#00CCBB'  />
            </TouchableOpacity>
        <View className='flex-1'><Text className='text-lg font-medium '>FARMER</Text></View>
        
        <Ionicons name='call-outline' size={25} color='#00CCBB' />
        <Image source={KisansetuLogo} className='ml-4 h-8 w-8'/>
        
      </View>

      {/* Start = Body */}
      <View className='bg-lime-100'>
      <View className='p-2 bg-lime-100 '>
      <View className='h-40 bg-emerald-100 rounded-xl'>
       <Slider/> 
      </View>
      </View>
      <View className='p-4'>
      <View className='mt-2 mb-4'>
      <Text className='font-bold'>EXPLORE BY CROPS  </Text>
          
        </View>
        {/* Explore by crops */}
        <View>
          <Crops/>
        </View>

        <View className='my-2.5 flex-row justify-between mt-4 mb-4'>
          <Text className='font-medium'>CONSUMER</Text>
          <TouchableOpacity>
            <Text style={{color:'#00CCBB'}}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        
        <View className='h-18'>
            <Consumer/>
          </View>

          <View className='mt-4 mb-4'>
            <Text className='font-bold'>MARKET INFORMTION</Text>
          </View>

          <View className='h-18'>
            <Market/>
          </View>

        
        <View className='my-2.5 flex-row justify-between mt-4 mb-4'>
          <Text className='font-medium'>BLOGS</Text>
          <TouchableOpacity>
            <Text style={{color:'#00CCBB'}}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <View className='h-20 mb-20'>
          <Blogs />
        </View>
        </View>
        </View>
    </ScrollView>
  )
}

export default Farmer