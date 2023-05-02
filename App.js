import React from 'react'
import {NativeBaseProvider} from 'native-base'
import { QueryClient, QueryClientProvider } from "react-query";
// import { NavigationContainer } from '@react-navigation/native';
import Container from './Container'
import { UserContextProvider } from './context/user';

export default function App() {
  const client = new QueryClient()
  return(
    // <NavigationContainer>
      <QueryClientProvider client={client}>
        <NativeBaseProvider>
          <UserContextProvider>
            <Container />
          </UserContextProvider>
        </NativeBaseProvider> 
      </QueryClientProvider>
    // </NavigationContainer>
    
  )
}
