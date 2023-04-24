import React from 'react'
import {NativeBaseProvider} from 'native-base'
// import AppLoading from 'expo-app-loading'
import Container from './Container'

export default function App() {
  return(
    <NativeBaseProvider>
      <Container/>
    </NativeBaseProvider> 
  )
}
