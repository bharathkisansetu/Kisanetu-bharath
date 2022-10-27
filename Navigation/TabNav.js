import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FarmerScreen from '../Screens/Home/Farmer/FarmerScreen';
import Nearby from '../Screens/Home/Farmer/Nearby';
import Addcrop from '../Screens/Home/Farmer/Addcrop';
import Mycrop from '../Screens/Home/Farmer/Mycrop';
import Profile from '../Screens/Home/Farmer/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { createDrawerNavigator } from '@react-navigation/drawer';
const drawer = createDrawerNavigator();
const tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <tab.Navigator screenOptions={{headerShown:false}}>
        <tab.Screen name='farmer' component={FarmerScreen} options={{
            tabBarIcon:({color,size}) =>(
                <Ionicons name='home-outline' size={20} color={color}/>
            )
        }}/>
        <tab.Screen name='nearby' component={Nearby} options={{
            tabBarIcon:({color,size}) =>(
                <Ionicons name='location-outline' size={20} color={color}/>
            )
        }}/>
        <tab.Screen name='addcrop' component={Addcrop}
        options={{
            tabBarIcon:({color,size}) =>(
                <Feather name='plus-circle' size={30} color={'green'}/>
            )
        }}
        />
        <tab.Screen name='mycrop' component={Mycrop}
        options={{
            tabBarIcon:({color,size}) =>(
                <Ionicons name='basket-outline' size={20} color={color}/>
            )
        }}
        />
        <tab.Screen name='profile' component={Profile} 
        options={{
            tabBarIcon:({color,size}) =>(
                <Ionicons name='person-outline' size={20} color={color}/>
            )
        }}
        />
    </tab.Navigator>
  )
}

export default TabNav