import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FarmOneScreen from '../Screens/MainScreens/Farmer/FarmOneScreen'
import Consumer from '../Screens/MainScreens/Consumer/Consumer'
import Vendor from '../Screens/MainScreens/Vendor/Vendor'
import ProfileInfo from '../Screens/MainScreens/Farmer/ProfileInfo'
import Settings from '../Screens/MainScreens/Farmer/Settings'
import About from '../Screens/MainScreens/Farmer/About'
import CustomDrawer from '../Components/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
const drawer = createDrawerNavigator()
const Drawer = () => {
  return (
    <drawer.Navigator  drawerContent={props => <CustomDrawer{...props} />} screenOptions={{headerShown:false}}>
        <drawer.Screen name='Farmer' component={FarmOneScreen}
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='home-outline' size={20} color='#00CCBB'/>
        )
      }}
        />
        <drawer.Screen name='Consumer' component={Consumer}
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-cart-outline' size={25} color='#00CCBB'/>
        )
      }}
        />
        <drawer.Screen name='Vendor' component={Vendor}
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-people-outline' size={25} color='#00CCBB'/>
        )
      }}
        />
        <drawer.Screen name='Profile Information' component={ProfileInfo}
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-person-outline' size={25} color='#00CCBB'/>
        )
      }}
        />
        <drawer.Screen name='Settings' component={Settings}
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='settings-outline' size={25} color='#00CCBB'/>
        )
      }}
        />
        <drawer.Screen name='About Kisansetu' component={About}
        options={{drawerIcon:({color,size})=>(
          <Ionicons name='ios-phone-portrait-sharp' size={25} color='#00CCBB'/>
        )
      }}
        />
    </drawer.Navigator>
  )
}

export default Drawer