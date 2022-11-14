import { View, Text,ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import KisansetuLogo from '../../../Src/Logo/KisansetuLogo.png'
import FaqView from '../../../Components/FaqView'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Faq = ({navigation}) => {
  return (
    <ScrollView>
      {/* Header = start */}
      <View style={{backgroundColor:'white', height:40,alignItems:'center', justifyContent:'center', flexDirection:'row' }}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('profile')}
        className='items-center justify-center ml-3'
        >
          <Ionicons name='arrow-back' size={20} color='#00CCBB'/>
        </TouchableOpacity>
        <View style={{flex:1}}>
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>FAQ SECTION</Text>

        </View>
      </View>

      {/* Header = End */}
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

export default Faq