import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React ,{ useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const FaqView = ({id,title,body}) => {
    const [showContent, setshowContent] =useState(false)
  return (
    <ScrollView className='p-3'>
      <TouchableOpacity
      onPress={()=>setshowContent(!showContent)}
      className='bg-white p-3 rounded-xl shadow-sm'>
        <View className='flex-row '>
        <Text className='flex-1  text-lg'>{title}</Text>
        <Ionicons name='chevron-forward' color='#00CCBB' size={22}/>
        </View>
        
        {showContent && <Text className='mb-5 text-gray-500'>{body}</Text>}
        </TouchableOpacity>
    </ScrollView>
  )
}

export default FaqView