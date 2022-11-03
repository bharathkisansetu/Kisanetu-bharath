import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FarmerMain from '../Screens/Home/Farmer/FarmerMain'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from '../Screens/MainScreen'
import AboutKisan from '../Screens/Home/Farmer/DrawerTab/AboutKisan'
import Crop from '../Screens/Home/Farmer/StackScreen/Crop'
import Farming from '../Screens/Home/Farmer/Addcrop/Farming'
import MyFarm from '../Screens/Home/Farmer/MyFarm'
import AddFarm from '../Screens/Home/Farmer/AddFarm'
import ConsumerMain from '../Screens/Home/Consumer/ConsumerMain'
import VendorMain from '../Screens/Home/Vendor/VendorMain'
import EditProfile from '../Screens/Home/Farmer/EditProfile'
import Settings from '../Screens/Home/Farmer/Settings'
import SettingScreen from '../Screens/Home/Consumer/SettingScreen'
const drawer = createDrawerNavigator()

const stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <stack.Navigator >
      <stack.Screen name='main' component={MainScreen} options={{headerShown:false}}/>
      <stack.Screen name='Farmermain' component={FarmerMain} options={{headerShown:false}}/>
      <stack.Screen name='Consumermain' component={ConsumerMain} options={{headerShown:false}}/>
      <stack.Screen name='Vendormain' component={VendorMain} options={{headerShown:false}}/>
      <stack.Screen name='crop' component={Crop} />
      <stack.Screen name='Farming' component={Farming} />
      <stack.Screen name='MyFarm' component={MyFarm} />
      <stack.Screen name='AddFarm' component={AddFarm} />
      <stack.Screen name='EDIT ACCOUNT' component={EditProfile} />
      <stack.Screen name='Setting Screen' component={SettingScreen} />
      
    </stack.Navigator>
  )
}

export default AppStack