import { View, Text, ScrollView, } from 'react-native'
import React from 'react'
import CropCards from './CropCards'
import img from '../../Src/crops.jpeg'
const CropCategory = ({id,title}) => {
  return (
    <View>
      <View className='mt-4 px-4'>
        <Text className='text-lg font-bold'>{title}</Text>
      </View>

      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15
      }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'
      >
        {/* All Crop Cards */}
        <CropCards
        id={12}
        image = {img}
        title='Cotton'
        Totalyield = '0.9 Per Tonnes Per Acre'
        Duration ='Min 65 Days'
        />
        <CropCards
        id={12}
        image = {img}
        title='Ground Nut'
        Totalyield = '0.9 Per Tonnes Per Acre'
        Duration ='Min 65 Days'
        />
        <CropCards
        id={12}
        image = {img}
        title='Ragi'
        Totalyield = '0.9 Per Tonnes Per Acre'
        Duration ='Min 65 Days'
        />
        <CropCards
        id={12}
        image = {img}
        title='SugarCane'
        Totalyield = '0.9 Per Tonnes Per Acre'
        Duration ='Min 65 Days'
        />
      </ScrollView>
    </View>
  )
}

export default CropCategory