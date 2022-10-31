import { View, Text,Image } from 'react-native'
import React from 'react'

const ConsumerItem = ({item}) => {
  return (
    <View className='items-center mr-3 mt-1 justify-center h-20'>
        <View>
        <Image source={item.image} resizeMode='contain' className='h-14 w-14'/>
        </View>
        <View>
            <Text>{item.name}</Text>
        </View>
      
    </View>
    
  )
}

export default ConsumerItem