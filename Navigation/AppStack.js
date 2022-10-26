import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FarmerScreen from '../Screens/Home/Farmer/FarmerScreen'
const drawer = createDrawerNavigator()
const AppStack = () => {
  return (
    <drawer.Navigator>
      <drawer.Screen name='Farmer' component={FarmerScreen} />
    </drawer.Navigator>
  )
}

export default AppStack