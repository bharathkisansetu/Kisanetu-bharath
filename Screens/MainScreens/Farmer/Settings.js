import { View, Text,TouchableOpacity, ScrollView, Alert } from 'react-native'
import React,{ useContext } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../../Components/AuthContext'
const Settings = ({navigation}) => {
  const {Logout} = useContext(AuthContext)
  const createTwoButtonAlert = () =>
    Alert.alert(
      "KISANSETU",
      "Are you sure you want to Logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {Logout()} }
      ]
    );
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
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}>Settings</Text>

        </View>
      </View>

      {/* Header = End */}
      <View className='p-3'>
      <Text className='text-lg'>Settings Information</Text>
      </View>
      
      <TouchableOpacity 
      
      className='flex-row p-3 bg-white'>
      <Ionicons name='language-outline' size={25} color='gray'/>
        <Text className='ml-10 text-xl'>
          Language
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      onPress={createTwoButtonAlert}
      className='flex-row p-3 bg-white'>
      <Ionicons name='log-out-outline' size={25} color='gray'/>
        <Text className='ml-10 text-xl'>
          Logout
        </Text>
      </TouchableOpacity>
      
    </ScrollView>
  )
}

export default Settings