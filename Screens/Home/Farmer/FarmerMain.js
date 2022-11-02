import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen'
import ConsumerMain from '../Consumer/ConsumerMain'
import VendorMain from './DrawerTab/VendorMain'
import ProfileInfo from './DrawerTab/ProfileInfo'
import Settings from './DrawerTab/Settings'
import AboutKisan from './DrawerTab/AboutKisan'
import Drawer from '../../../Components/Drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

const drawer = createDrawerNavigator()
const FarmerMain = () => {
  return (
    <drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => <Drawer{...props} />}>
        <drawer.Screen name='Farmer' component={HomeScreen} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='home-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <drawer.Screen name='Consumer' component={ConsumerMain} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-cart-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <drawer.Screen name='Vendor' component={VendorMain} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-people-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <drawer.Screen name='Profile Information' component={ProfileInfo} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-person-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <drawer.Screen name='Settings' component={Settings} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='settings-outline' size={25} color='#00CCBB'/>
        )
      }}/>
        <drawer.Screen name='About KisanSetu' component={AboutKisan} 
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-phone-portrait-sharp' size={25} color='#00CCBB'/>
        )
      }}
        />
    </drawer.Navigator>
  )
}

export default FarmerMain