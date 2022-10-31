import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FarmerMain from '../Screens/Home/Farmer/FarmerMain'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from '../Screens/MainScreen'
import AboutKisan from '../Screens/Home/Farmer/DrawerTab/AboutKisan'
import Crop from '../Screens/Home/Farmer/StackScreen/Crop'
const drawer = createDrawerNavigator()

const stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <stack.Navigator >
      <stack.Screen name='main' component={MainScreen} options={{headerShown:false}}/>
      <stack.Screen name='Farmermain' component={FarmerMain} options={{headerShown:false}}/>
      <stack.Screen name='crop' component={Crop} />
      
    </stack.Navigator>
  )
}

export default AppStack