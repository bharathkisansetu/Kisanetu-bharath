import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const About = ({navigation}) => {
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
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>About KisanSetu</Text>

        </View>
      </View>

      {/* Header = End */}
      <View>
        <Text>About</Text>
      </View>
    </ScrollView>
  )
}

export default About