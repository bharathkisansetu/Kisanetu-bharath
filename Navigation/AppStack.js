import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstScreen from '../Screens/AuthScreens/FirstScreen'
import SecondScreen from '../Screens/AuthScreens/SecondScreen'
import ThirdScreen from '../Screens/AuthScreens/ThirdScreen'
import VerifyScreen from '../Screens/AuthScreens/VerifyScreen'
import SplashScreen from '../Screens/SplashScreen'

const stack = createNativeStackNavigator()


const Appstack = () => {
  return (
    
    <stack.Navigator screenOptions={{headerShown:false}}>
       <stack.Screen name='splash' component={SplashScreen}/>
        <stack.Screen name='first' component={FirstScreen}/>
       <stack.Screen name='second' component={SecondScreen}/>
       <stack.Screen name='third' component={ThirdScreen}/>
        <stack.Screen name='verify' component={VerifyScreen}/>
        
        
     </stack.Navigator>
  )
}

export default Appstack