import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import KisansetuLogo from '../../../../Src/Logo/KisansetuLogo.png'
const MyCrop = ({navigation}) => {
  return (
    <ScrollView
    className='bg-slate-100'
    showsHorizontalScrollIndicator={false}>
    <View style={{backgroundColor:'white', height:40,alignItems:'center', justifyContent:'center', flexDirection:'row' }}>
      <TouchableOpacity
       onPress={()=>{
         navigation.openDrawer()
        }}
        style={{marginLeft:4, }}
      >
        <Ionicons name='reorder-three-outline' size={25} color='#00CCBB'  />
      </TouchableOpacity>
      <View style={{flex:1}}>
        <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>MY CROP</Text>
      </View >
      <TouchableOpacity
      onPress={()=>navigation.navigate('callreq')}
      >
        <Ionicons name='call-outline' size={25} color='#00CCBB' />
      </TouchableOpacity>
      <Image source={KisansetuLogo} style={{marginLeft:16, height:30, width:30, marginRight:10,}}/>
      </View>
      </ScrollView>
  )
}

export default MyCrop