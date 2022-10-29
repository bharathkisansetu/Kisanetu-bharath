import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const AboutKisan = ({navigation}) => {
  return (
    <View>
      <View className='flex-row bg-white h-10 items-center justify-center'>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Farmermain')}
        className='ml-2 flex-1'
        >
        <Ionicons name='arrow-back-sharp' size={20} color='#00CCBB'/>
        </TouchableOpacity>
        <View className='flex-auto'>
        <Text className='text-lg font-medium'>About KisanSetu</Text>
        </View>
      

      </View>
      <Text>
        KisanSetu
      </Text>
      
    </View>
  )
}

export default AboutKisan