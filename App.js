
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FirstScreen from './Screens/Auth/FirstScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import Secondscreen from './Screens/Auth/Secondscreen';
import ThirdScreen from './Screens/Auth/ThirdScreen';
import VerifyScreen from './Screens/Auth/VerifyScreen';
export default function App() {
  return (
    <TailwindProvider>
    
      <VerifyScreen/>
    
    </TailwindProvider>
  );
}

