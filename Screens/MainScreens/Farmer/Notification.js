import { View, Text,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Notification = ({navigation}) => {
  return (
    <ScrollView>
      {/* Header = start */}
      <View style={{backgroundColor:'white', height:40,alignItems:'center', justifyContent:'center', flexDirection:'row' }}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        className='items-center justify-center ml-3'
        >
          <Ionicons name='arrow-back' size={20} color='#00CCBB'/>
        </TouchableOpacity>
        <View style={{flex:1}}>
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>Notification</Text>

        </View>
      </View>

      {/* Header = End */}
    </ScrollView>
  )
}

export default Notification