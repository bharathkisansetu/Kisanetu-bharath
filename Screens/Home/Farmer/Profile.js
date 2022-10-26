import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Nearby from './Nearby'
const bottom = createBottomTabNavigator()
const Profile = () => {
  return (
    <bottom.Navigator screenOptions={{headerShown:false}}>
      <bottom.Screen name='home' component={Home} />
      <bottom.Screen name='nearby' component={Nearby} />
    </bottom.Navigator>
  )
}

export default Profile