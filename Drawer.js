import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Feed from './Feed'
import Article from './Article'
const drawer = createDrawerNavigator()
const Drawer = () => {
  return (
    <NavigationContainer>
    <drawer.Navigator>
      <drawer.Screen name="Feed" component={Feed} />
      <drawer.Screen name="Article" component={Article} />
    </drawer.Navigator>
    </NavigationContainer>
  )
}

export default Drawer