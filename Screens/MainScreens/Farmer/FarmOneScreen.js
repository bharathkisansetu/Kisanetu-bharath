import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Farmer from './Bottom/Farmer';
import Nearby from './Bottom/Nearby';
import AddCrop from './Bottom/AddCrop';
import MyCrop from './Bottom/MyCrop';
import Profile from './Bottom/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
const FarmOneScreen = () => {
  return (
    <Tab.Navigator screenOptions={({ route })=>({
        headerShown:false,
        
       
        
        tabBarIcon: ({ focused, color, size })=>{
            let iconName;
            if (route.name === 'Home'){
              
                iconName = focused
                ? 'ios-home-sharp'
                : 'ios-home-outline';
            }else if (route.name === 'nearby') {
                iconName = focused
                 ? 'location-sharp'
                  : 'location-outline';
              }
              else if (route.name === 'addcrop') {
                iconName = focused 
                ? 'add-circle-sharp' 
                : 'add-circle-outline';
              }
              else if (route.name === 'mycrop') {
                iconName = focused 
                ? 'basket-sharp' 
                : 'basket-outline';
              }
              else if (route.name === 'profile') {
                iconName = focused ? 'person-sharp' : 'person-outline';
              }
              return <Ionicons name={iconName} size={25} color='black' />;
        },
    })}>
      <Tab.Screen name="Home" component={Farmer}/>
      <Tab.Screen name="nearby" component={Nearby} />
      <Tab.Screen name="addcrop" component={AddCrop} />
      <Tab.Screen name="mycrop" component={MyCrop} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default FarmOneScreen