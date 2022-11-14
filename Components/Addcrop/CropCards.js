import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CropCards = ({
    id,
    image,
    title,
}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>{
        navigation.navigate('SELECT CROP',{
            id,
            image,
            title,
            
        })
    }}
    className='px-2'>
        <Image source={image} 
        className='h-20 w-20 rounded-2xl'/>
        <View >
        <Text className='text-sm text-center font-bold pt-2'>{title}</Text>

        </View>
    </TouchableOpacity>
  )
}

export default CropCards