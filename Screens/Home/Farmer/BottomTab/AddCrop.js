import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import KisansetuLogo from '../../../../Src/KisansetuLogo.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CropList from '../../../../Components/Addscreen/CropList'
import Fruits from '../../../../Components/Addscreen/Fruits'
import Pulses from '../../../../Components/Addscreen/Pulses'
import Livestock from '../../../../Components/Addscreen/Livestock'
import Vege from '../../../../Components/Addscreen/Vege'

const AddCrop = ({navigation}) => {
  return (
    <ScrollView className='bg-lime-100'>
      <View className='bg-white h-10 items-center flex-row'>
        <TouchableOpacity 
        onPress={()=>{
            navigation.openDrawer()
        }}
        className='ml-2 flex-1'>
            <Ionicons name='reorder-three-outline' size={25} color='#00CCBB' className='ml-3' />
            </TouchableOpacity>
        <View className='flex-1'><Text className='text-lg font-medium '>ADD CROP</Text></View>
        
        <Ionicons name='call-outline' size={25} color='#00CCBB' />
        <Image source={KisansetuLogo} className='ml-4 h-8 w-8'/>
        
      </View>
      <TouchableOpacity className='items-center mt-3'
      onPress={()=>navigation.navigate('Farming')}
      >
        <Text className='text-2xl font-medium text-orange-500'>Pick Your Crop</Text>
      </TouchableOpacity>
      {/* Add crop section */}
      <View className='p-2 mt-5'>
        <Text className='font-bold text-xl'>CROP</Text>
      </View>
      <View className='mb-5'>
        <CropList/>
      </View>

      {/* Add Pulses section */}
      <View className='p-2'>
        <Text className='font-bold text-xl'>PULSES</Text>
        <View className='mb-5'>
          <Pulses/>
        </View>
      </View>

      {/* Add VEGETABELS section */}
      <View className='p-2 '>
        <Text className='font-bold text-xl'>VEGETABELS</Text>
        <View className='mb-5'>
          <Vege/>
        </View>
      </View>

      {/* Add FRUITS section */}
      <View className='p-2'>
        <Text className='font-bold text-xl'>FRUITS</Text>
        <View className='mb-5'>
          <Fruits/>
        </View>
      </View>

      {/* Add LIVESTOCK section */}
      <View className='p-2'>
        <Text className='font-bold text-xl'>LIVESTOCK</Text>
        <View className='mb-5'>
          <Livestock/>
        </View>
      </View>

      {/* Add Organic section */}
      <View className='p-2 mb-20'>
        <Text className='font-bold text-xl'>ORGANIC</Text>
      </View>
    </ScrollView>
  )
}

export default AddCrop