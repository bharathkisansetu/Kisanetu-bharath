import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FarmerMain from '../Screens/Home/Farmer/FarmerMain'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from '../Screens/MainScreen'
import AboutKisan from '../Screens/Home/Farmer/DrawerTab/AboutKisan'

const drawer = createDrawerNavigator()

const stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name='main' component={MainScreen}/>
      <stack.Screen name='Farmermain' component={FarmerMain} />
      
    </stack.Navigator>
  )
}

export default AppStack