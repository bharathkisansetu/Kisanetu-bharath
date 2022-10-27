import { View, Text, ActivityIndicator } from 'react-native'
import React, {useContext} from 'react'
import AppStack from '../Navigation/AppStack'
import AuthStack from '../Navigation/AuthStack'
import MainScreen from '../Screens/MainScreen'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../Src/Context/AuthContext'
const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext);

    if(isLoading){
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    }
  return (
    
    <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default AppNav