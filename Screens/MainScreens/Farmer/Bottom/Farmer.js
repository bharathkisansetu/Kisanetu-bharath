import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import KisansetuLogo from '../../../../Src/Logo/KisansetuLogo.png'
import Slider from '../../../../Components/Slider'
import Crops from '../../../../Components/Crops'
import Consumer from '../../../../Components/Consumer'
import Market from '../../../../Components/Market'
import Blogs from '../../../../Components/Blogs'
const Farmer = ({navigation}) => {
  return (
    <ScrollView className='bg-slate-100'
    showsHorizontalScrollIndicator={false}
    >
      {/* Start of the header section  */}
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
        <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>FARMER</Text>
      </View >
      <TouchableOpacity
      onPress={()=>navigation.navigate('callreq')}
      >
        <Ionicons name='call-outline' size={25} color='#00CCBB' />
      </TouchableOpacity>
      
      <Image source={KisansetuLogo} style={{marginLeft:16, height:30, width:30, marginRight:10,}}/>
      </View>
      {/* Heading end */}

      {/* Start = Body */}
       <View style={{height:160, marginTop:10}}>
        <Slider />
      </View> 
      <View style={{padding:10}}>
        <Text style={{fontSize:16, color:'black'}}>EXPLORE BY CROPS</Text>
      </View>
       {/* Explore = start */}
       <View style={{height:100, backgroundColor:'#f8f8ff', alignItems:'center', justifyContent:'center'}}>
        <Crops/>
       </View>
      <View style={{padding:10, flexDirection:'row'}}>
        <Text style={{fontSize:16, color:'black', flex:1,}}>CONSUMER</Text>
        <TouchableOpacity >
          <Text style={{fontSize:16, color:'black'}}>VIEW ALL</Text>
          </TouchableOpacity>
      </View>
      {/* Explore = start */}
       <View style={{height:80, backgroundColor:'#f8f8ff',alignItems:'center', justifyContent:'center'}}>
        <Consumer />
       </View>

      <View style={{padding:10}}>
        <Text style={{fontSize:16, color:'black'}}>MARKET INFORMATION</Text>
      </View>
        {/* Market = start */}
        <View style={{height:120, backgroundColor:'#f8f8ff',alignItems:'center', justifyContent:'center'}}>
          <Market/>
        </View>
      <View style={{padding:10, flexDirection:'row'}}>
        <Text style={{fontSize:16, color:'black', flex:1,}}>BLOGS</Text>
        <TouchableOpacity >
          <Text style={{fontSize:16, color:'black'}}>VIEW ALL</Text>
          </TouchableOpacity>
      </View>
      {/* Blogs = start */}
       <View style={{height:140, backgroundColor:'#f8f8ff'}}>
        <Blogs/>
       </View>
      {/* End = Body */}
    </ScrollView>
      
  )
}

export default Farmer