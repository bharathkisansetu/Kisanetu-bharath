import { View, Text, ScrollView, TouchableOpacity,  Alert  } from 'react-native'
import React,{ useContext } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../../Src/Context/AuthContext'
const SettingScreen = () => {
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
    <ScrollView className='bg-lime-100'>
      <View className='p-3'>
      <Text className='text-lg'>Settings Information</Text>
      </View>
      
      
      <TouchableOpacity 
      onPress={createTwoButtonAlert}
      className='flex-row p-3 bg-emerald-100'>
      <Ionicons name='log-out-outline' size={25} color='gray'/>
        <Text className='ml-10 text-xl'>
          Logout
        </Text>
      </TouchableOpacity>
      
    </ScrollView>
  )
}

export default SettingScreen