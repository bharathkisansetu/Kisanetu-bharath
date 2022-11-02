import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MyFarm = ({navigation}) => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
    <TouchableOpacity
     onPress={()=>navigation.navigate('AddFarm')}
      className='bg-emerald-600 h-10 w-9/12 items-center justify-center rounded-full'>
        <Text className='text-white'>ADD FARM</Text>
      </TouchableOpacity>
      </View>
  )
}

export default MyFarm