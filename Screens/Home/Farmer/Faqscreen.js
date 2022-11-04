import { View, Text,ScrollView, Image } from 'react-native'
import React from 'react'
import FaqView from '../../../Components/FaqView'
import KisansetuLogo from '../../../Src/KisansetuLogo.png'
const Faqscreen = () => {
  return (
    <ScrollView className='bg-lime-100'>
        <View className='items-center justify-center p-3'>
            <Image source={KisansetuLogo} className='h-20 w-20'/>
            <Text className='text-green-600'>KISAN<Text className='text-orange-500'>SETU</Text></Text>
        </View>
      <FaqView
      id={12}
      title='what is kisanSetu?'
      body='Kisansetu is farmers agri tech app launched first time in the karnataka...!'
      />
      <FaqView 
      id={13}
      title='what is kisan'
      body='Kisansetu is farmers agri tech app launched first time in the karnataka...!'
      />
      <FaqView
      id={1}
      title='testing'
      body='testing testing testing testing'
      />
      
    </ScrollView>
  )
}

export default Faqscreen