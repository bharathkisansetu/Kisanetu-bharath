import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FarmerScreen from '../Screens/Home/Farmer/FarmerScreen'
import TabNav from './TabNav'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackActions } from '@react-navigation/native'
import MainScreen from '../Screens/MainScreen'
const drawer = createDrawerNavigator()

const stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name='main' component={MainScreen}/>
      <stack.Screen name='Farmer' component={TabNav} />
    </stack.Navigator>
  )
}

export default AppStack