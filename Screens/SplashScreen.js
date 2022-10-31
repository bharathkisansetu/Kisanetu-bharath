import { View, Text,Image } from 'react-native'
import React, {useEffect} from 'react'
import KisansetuLogo from '../Src/KisansetuLogo.png'

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {
        navigation.navigate('first')
    }, 5000);
},[])
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Image source={KisansetuLogo} className='h-28 w-28'/>
      <Text className='text-green-700 text-2xl'>KISAN<Text className='text-orange-500'>SETU</Text></Text>
    </View>
  )
}

export default SplashScreen