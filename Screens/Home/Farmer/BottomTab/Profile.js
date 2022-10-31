import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import KisansetuLogo from '../../../../Src/KisansetuLogo.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Profile = ({navigation}) => {
  return (
    <ScrollView>
    <View>
      {/* Header Section */}
      <View className='bg-white h-10 items-center flex-row'>
        <TouchableOpacity 
        onPress={()=>{
            navigation.openDrawer()
        }}
        className='ml-2 flex-1'>
            <Ionicons name='reorder-three-outline' size={25} color='#00CCBB' className='ml-3' />
            </TouchableOpacity>
        <View className='flex-1'><Text className='text-lg font-medium '>PROFILE</Text></View>
        
        <Ionicons name='call-outline' size={25} color='#00CCBB' />
        <Image source={KisansetuLogo} className='ml-4 h-8 w-8'/>
        
      </View>
      <View className='bg-lime-100 p-3'>
        <Text className='text-xl mb-5'>My Details</Text>

        <TouchableOpacity className='flex-row mb-3'>
        <Ionicons name='ios-person-outline' size={20} color='#00CCBB'/>
        <Text className='text-lg ml-8'>Profile Information</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-row mb-3'>
        <Ionicons name='leaf-outline' size={20} color='#00CCBB'/>
        <Text className='text-lg ml-8'>Farm Information</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-row mb-3'>
        <Ionicons name='bar-chart-outline' size={20} color='#00CCBB'/>
        <Text className='text-lg ml-8'>Sales Information</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-row mb-3'>
        <AntDesign name='questioncircleo' size={20} color='#00CCBB'/>
        <Text className='text-lg ml-8'>FAQ</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-row mb-3'>
        <Ionicons name='notifications-outline' size={20} color='#00CCBB'/>
        <Text className='text-lg ml-8'>Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-row mb-3'>
        <Ionicons name='settings-outline' size={20} color='#00CCBB'/>
        <Text className='text-lg ml-8'>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-row mb-60'>
        <Ionicons name='phone-portrait-outline' size={20} color='#00CCBB'/>
        <Text className='text-lg ml-8'>About KisanSetu</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default Profile