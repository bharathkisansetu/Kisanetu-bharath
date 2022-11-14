import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import KisansetuLogo from '../../../../Src/Logo/KisansetuLogo.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Profile = ({navigation}) => {
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
        <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>PROFILE</Text>
      </View >
      <TouchableOpacity
      onPress={()=>navigation.navigate('callreq')}
      >
        <Ionicons name='call-outline' size={25} color='#00CCBB' />
      </TouchableOpacity>
      <Image source={KisansetuLogo} style={{marginLeft:16, height:30, width:30, marginRight:10,}}/>
      </View>
      {/* Header Ends */}
      <View style={{flexDirection:'row', padding:30}}>
        <Image source={KisansetuLogo} style={{height:50, width:50,marginRight:10}}/>
        <View style={{flexDirection:'column'}}>
        <Text style={{ fontSize:20, color:'black'}}>Bharath Chandrashekar</Text>
        <Text style={{ fontSize:16,}}>Bangalore, Karnataka(KA)</Text>
        </View>
      </View>
      <View style={{}}>
          <Text style={{ fontSize:20,padding:12,}}>My Details</Text>
          <View style={{backgroundColor:'#ffffff'}}>

          <TouchableOpacity
          onPress={()=>navigation.navigate('Profile Information')} 
          style={{flexDirection:'row',padding:12}}>
          <Ionicons name='ios-person-outline' size={20} color='black'/>
          <Text style={{marginLeft:32,fontSize:16,color:'black'}}>Profile Information</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=>navigation.navigate('Farm Information')} 
          style={{flexDirection:'row',padding:12}}>
          <Ionicons name='leaf-outline' size={20} color='black'/>
          <Text style={{marginLeft:32,fontSize:16,color:'black'}}>Farm Information</Text>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>navigation.navigate('Sales Information')}  
          style={{flexDirection:'row',padding:12}}>
          <Ionicons name='bar-chart-outline' size={20} color='black'/>
          <Text style={{marginLeft:32,fontSize:16,color:'black'}}>Sales Information</Text>
          </TouchableOpacity>

          <TouchableOpacity 
           onPress={()=>navigation.navigate('FAQ')}
          style={{flexDirection:'row',padding:12}}>
          <AntDesign name='questioncircleo' size={20} color='black'/>
          <Text style={{marginLeft:32,fontSize:16,color:'black'}}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>navigation.navigate('Notification')} 
          style={{flexDirection:'row',padding:12}}>
          <Ionicons name='notifications-outline' size={20} color='black'/>
          <Text style={{marginLeft:32,fontSize:16,color:'black'}}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>navigation.navigate('Settings')}  
          style={{flexDirection:'row',padding:12}}>
          <Ionicons name='settings-outline' size={20} color='black'/>
          <Text style={{marginLeft:32,fontSize:16,color:'black'}}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=>navigation.navigate('About Kisansetu')} 
          style={{flexDirection:'row',padding:12}}>
          <Ionicons name='phone-portrait-outline' size={20} color='black'/>
          <Text style={{marginLeft:32,fontSize:16,color:'black'}}>About Kisansetu</Text>
          </TouchableOpacity>

          </View>
      </View>
      </ScrollView>
  )
}

export default Profile