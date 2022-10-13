/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { Home } from './src/screens/Home'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <Home />
      <StatusBar barStyle="light-content" translucent />
    </>
  )
}
