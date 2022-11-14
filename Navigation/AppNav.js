import { View, Text, ActivityIndicator } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ScreenStack from './ScreenStack'
import Appstack from './Appstack'
import { AuthContext } from '../Components/AuthContext'
const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext);

    if(isLoading){
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    }
  return (
    <NavigationContainer>
         {userToken !== null ?< ScreenStack />:<Appstack /> }
     
    </NavigationContainer>
  )
}

export default AppNav