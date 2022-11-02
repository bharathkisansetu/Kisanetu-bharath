import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Shop from './Conbottomtab/Shop'
import Crop from './Conbottomtab/Crop'
import Add from './Conbottomtab/Add'
import Request from './Conbottomtab/Request'
import Profile from './Conbottomtab/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../../Constants'
const bottom = createBottomTabNavigator()
const ConsumerHome = () => {
  return (
    <bottom.Navigator
    screenOptions={({ route })=>({
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:Colors.black,
        tabBarStyle:{
            position:'absolute',
            backgroundColor:Colors.backgroundtab,
            left:20,
            right:20,
            bottom:20,
            height:50,
            borderRadius:20,
        },
        tabBarIcon: ({ focused, color, size })=>{
            let iconName;
            if (route.name === 'Shop'){
                iconName = focused
                ? 'cart-sharp'
                : 'cart-outline';
            }else if (route.name === 'crop') {
                iconName = focused
                 ? 'md-apps-sharp'
                  : 'md-apps-outline';
              }
              else if (route.name === 'add') {
                iconName = focused 
                ? 'add-circle-sharp' 
                : 'add-circle-outline';
              }
              else if (route.name === 'request') {
                iconName = focused 
                ? 'ios-call-sharp' 
                : 'ios-call-outline';
              }
              else if (route.name === 'profile') {
                iconName = focused ? 'person-sharp' : 'person-outline';
              }
              return <Ionicons name={iconName} size={25} color={color} />;
        },
    })}
    >
        <bottom.Screen name='Shop' component={Shop}/>
        <bottom.Screen name='crop' component={Crop} />
        <bottom.Screen name='add' component={Add} />
        <bottom.Screen name='request' component={Request} />
        <bottom.Screen name='profile' component={Profile} />
    </bottom.Navigator>
  )
}

export default ConsumerHome