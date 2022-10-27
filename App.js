import { View, Text,  } from 'react-native'
import React from 'react'

import { AuthProvider } from './Src/Context/AuthContext'
import AppNav from './Navigation/AppNav'
const App = () => {
  return (
    <AuthProvider>
    <AppNav/>
    </AuthProvider>
  )
}

export default App