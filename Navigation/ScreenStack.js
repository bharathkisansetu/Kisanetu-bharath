import { View, Text } from 'react-native'
import React from 'react'
const stack = createNativeStackNavigator()
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FarmOneScreen from '../Screens/MainScreens/Farmer/FarmOneScreen'
import Drawer from './Drawer'
import ProfileInfo from '../Screens/MainScreens/Farmer/ProfileInfo'
import FarmInfo from '../Screens/MainScreens/Farmer/FarmInfo'
import SalesInfo from '../Screens/MainScreens/Farmer/SalesInfo'
import Faq from '../Screens/MainScreens/Farmer/Faq'
import Notification from '../Screens/MainScreens/Farmer/Notification'
import Settings from '../Screens/MainScreens/Farmer/Settings'
import About from '../Screens/MainScreens/Farmer/About'
import AddFarm from '../Screens/MainScreens/Farmer/AddFarm'
import MainScreen from '../Screens/MainScreen'
import Adding from '../Screens/Adding'
import CallReq from '../Screens/CallReq'

const ScreenStack = () => {
  return (
    <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name='Main' component={MainScreen} />
        <stack.Screen name='drawer' component={Drawer} />
        <stack.Screen name='Profile Information' component={ProfileInfo}/>
        <stack.Screen name='Farm Information' component={FarmInfo}/>
        <stack.Screen name='Sales Information' component={SalesInfo}/>
        <stack.Screen name='FAQ' component={Faq}/>
        <stack.Screen name='Notification' component={Notification}/>
        <stack.Screen name='Settings' component={Settings}/>
        <stack.Screen name='About Kisansetu' component={About}/>
        <stack.Screen name='ADD FARM' component={AddFarm}/>
        <stack.Screen name='SELECT CROP' component={Adding}/>
        <stack.Screen name='callreq' component={CallReq}/>
    </stack.Navigator>
  )
}

export default ScreenStack