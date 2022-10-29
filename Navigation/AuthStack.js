import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import FirstScreen from '../Screens/Auth/FirstScreen';
import SecondScreen from '../Screens/Auth/SecondScreen';
import ThirdScreen from '../Screens/Auth/ThirdScreen';
import VerifyScreen from '../Screens/Auth/VerifyScreen';
import MainScreen from '../Screens/MainScreen';
import SplashScreen from '../Screens/SplashScreen';
import FarmerMain from '../Screens/Home/Farmer/FarmerMain';
const stack = createNativeStackNavigator()
const AuthStack = () => {
  return (
    
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='splash' component={SplashScreen} />
        <stack.Screen name='first' component={FirstScreen} />
        <stack.Screen name='second' component={SecondScreen}/>
            <stack.Screen name='third' component={ThirdScreen}/>
            <stack.Screen name='verify' component={VerifyScreen}/>
            <stack.Screen name='main' component={MainScreen}/>
            <stack.Screen name='farmer' component={FarmerMain}/>
            
      </stack.Navigator>
    
  )
}

export default AuthStack