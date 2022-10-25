
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FirstScreen from './Screens/Auth/FirstScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import Secondscreen from './Screens/Auth/Secondscreen';
import ThirdScreen from './Screens/Auth/ThirdScreen';
import VerifyScreen from './Screens/Auth/VerifyScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './Screens/Home/MainScreen';
import FarmerScreen from './Screens/Home/Farmer/FarmerScreen';
import ConsumerScreen from './Screens/Home/Consumer/ConsumerScreen';
import VendorScreen from './Screens/Home/Vendor/VendorScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
    
      <Stack.Navigator>
        <Stack.Screen component={FirstScreen} name='firstScreen' options={{headerShown:false}}/>
        <Stack.Screen component={Secondscreen} name='SecondScreen' options={{headerShown:false}} />
        <Stack.Screen component={ThirdScreen} name='thirdScreen' options={{headerShown:false}} />
        <Stack.Screen component={VerifyScreen} name='verifyScreen' options={{headerShown:false}} />
        <Stack.Screen component={MainScreen} name='mainscreen' options={{headerShown:false}} />
        <Stack.Screen component={FarmerScreen} name='farmerscreen' options={{headerShown:false}} />
        <Stack.Screen component={ConsumerScreen} name='consumerscreen' options={{headerShown:false}} />
        <Stack.Screen component={VendorScreen} name='vendorscreen' options={{headerShown:false}} />
      </Stack.Navigator>
    
    </TailwindProvider>
    </NavigationContainer>
  );
}

