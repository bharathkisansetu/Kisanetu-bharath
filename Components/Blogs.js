import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Organic from '../Src/organic.jpg'
const Blogs = () => {
  return (
    <TouchableOpacity style={{flexDirection:'row',padding:10}}>
      <Image source={Organic} className='h-20 w-20 mr-3'/>
      <View className='flex-col'>
      <Text>While world was struggling to covid-19 pandamic</Text>
      <Text>While world was struggling to covid-19 pandamic</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Blogs