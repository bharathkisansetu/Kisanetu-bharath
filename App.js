import { View, Text,  } from 'react-native'
import React from 'react'

import { AuthProvider } from './Src/Context/AuthContext'
import AppNav from './Navigation/AppNav'
import HomeScreen from './Screens/Home/Farmer/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (
    <AuthProvider>
    <AppNav/>
    </AuthProvider>
    
  )
}

export default App