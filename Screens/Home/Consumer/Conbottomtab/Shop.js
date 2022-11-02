import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import KisansetuLogo from '../../../../Src/KisansetuLogo.png'
import Slider from '../../../../Components/Slider'
import { con } from '../../../../data'
import ConItem from '../../../../Components/Consumer/ConItem'
import Crops from '../../../../Components/Crops'
const Shop = ({navigation}) => {
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
      {/* Start = ads */}
      <View className='p-2 bg-lime-100 '>
      <View className='h-40 bg-emerald-100 rounded-xl'>
       <Slider/> 
      </View>
      </View>
      {/* End= ads */}

        {/* Start = consumer */}
      <View className='p-3'>
        <Text className='font-medium text-lg'>
            Consumer
        </Text>
        <View>
            <FlatList data={con}
            renderItem={({item})=> <ConItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
      {/* End = consumer */}

      <View className='p-3'>
        <Text className='font-medium text-lg'>
            Ready To Harvest
        </Text>
      </View>

      <View className='p-3'>
        <Text className='font-medium text-lg'>
            CATEGORY
        </Text>
        <View>
        <Crops/>
        </View>
      </View>
        {/* Start = Farmer */}
        <View className='my-2.5 flex-row justify-between p-3 mt-4 mb-4'>
          <Text className='font-medium text-lg'>FARMER</Text>
          <TouchableOpacity>
            <Text style={{color:'#00CCBB'}} className='font-medium text-lg'>VIEW ALL</Text>
          </TouchableOpacity>
        </View>

    </ScrollView>
  )
}

export default Shop