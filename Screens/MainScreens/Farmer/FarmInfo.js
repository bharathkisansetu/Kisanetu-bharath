import { View, Text,TouchableOpacity,ScrollView  } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const FarmInfo = ({navigation}) => {
  return (
    <ScrollView >
      {/* Header = start */}
      <View style={{backgroundColor:'white', height:40,alignItems:'center', justifyContent:'center', flexDirection:'row' }}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('profile')}
        className='items-center justify-center ml-3'
        >
          <Ionicons name='arrow-back' size={20} color='#00CCBB'/>
        </TouchableOpacity>
        <View style={{flex:1}}>
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>MY FARMS</Text>

        </View>
      </View>

      {/* Header = End */}
      <View className='mt-20 items-center '>
          <TouchableOpacity
     onPress={()=>navigation.navigate('ADD FARM')}
      className='bg-emerald-600 h-10 w-9/12 items-center justify-center rounded-full'>
        <Text className='text-white'>ADD MORE FARM</Text>
      </TouchableOpacity>
      </View>
    
      </ScrollView>
  )
}

export default FarmInfo