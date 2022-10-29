import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Farmer from './BottomTab/Farmer'
import Mycrop from './BottomTab/Mycrop'
import AddCrop from './BottomTab/AddCrop'
import NearBy from './BottomTab/NearBy'
import Profile from './BottomTab/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../../Constants'
const bottom = createBottomTabNavigator()
const HomeScreen = () => {
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
            bottom:25,
            height:50,
            borderRadius:20,
        },
        tabBarIcon: ({ focused, color, size })=>{
            let iconName;
            if (route.name === 'farmer'){
                iconName = focused
                ? 'ios-home-sharp'
                : 'ios-home-outline';
            }else if (route.name === 'nearby') {
                iconName = focused
                 ? 'location-sharp'
                  : 'location-outline';
              }
              else if (route.name === 'Addcrop') {
                iconName = focused 
                ? 'add-circle-sharp' 
                : 'add-circle-outline';
              }
              else if (route.name === 'mycrop') {
                iconName = focused 
                ? 'basket-sharp' 
                : 'basket-outline';
              }
              else if (route.name === 'Profile') {
                iconName = focused ? 'person-sharp' : 'person-outline';
              }
              return <Ionicons name={iconName} size={25} color={color} />;
        },
    })}
    >
        <bottom.Screen name='farmer' component={Farmer}/>
        <bottom.Screen name='nearby' component={NearBy}/>
        <bottom.Screen name='Addcrop' component={AddCrop}/>
        <bottom.Screen name='mycrop' component={Mycrop} />
        <bottom.Screen name='Profile' component={Profile}/>
        
    </bottom.Navigator>
  )
}

export default HomeScreen