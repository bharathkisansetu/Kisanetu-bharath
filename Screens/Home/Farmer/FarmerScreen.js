import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home'
const drawer = createDrawerNavigator()
const FarmerScreen = () => {
  return (
    <drawer.Navigator >
      <drawer.Screen name='farmers' component={Home}/>
    </drawer.Navigator>
  )
}

export default FarmerScreen