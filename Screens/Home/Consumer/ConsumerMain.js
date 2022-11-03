import { View, Text } from 'react-native'
import React from 'react'


import { createDrawerNavigator } from '@react-navigation/drawer'
import Farmer from '../Farmer/BottomTab/Farmer'
import ConsumerHome from './ConsumerHome'
import VendorMain from '../Farmer/DrawerTab/VendorMain'
import Profile from '../Farmer/BottomTab/Profile'
import Settings from '../Farmer/DrawerTab/Settings'
import AboutKisan from '../Farmer/DrawerTab/AboutKisan'
import HomeScreen from '../Farmer/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Slider = createDrawerNavigator()
const ConsumerMain = () => {
  return (
    <Slider.Navigator screenOptions={{headerShown:false}} drawerContent={props => <Drawer{...props} />}>
      <Slider.Screen name='Farmer' component={HomeScreen} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='home-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <Slider.Screen name='Consumer' component={ConsumerHome} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-cart-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <Slider.Screen name='Vendor' component={VendorMain} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-people-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <Slider.Screen name='Profile Information' component={Profile} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-person-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <Slider.Screen name='Settings' component={Settings} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='settings-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <Slider.Screen name='About KisanSetu' component={AboutKisan} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-phone-portrait-sharp' size={25} color='#00CCBB'/>
        )
      }}
        />
    </Slider.Navigator>
  )
}

export default ConsumerMain