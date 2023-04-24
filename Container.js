import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/RegisterForm';
import Login from './screens/Login';
// import Category from './screens/Category';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator();

export default function Container(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );  
}

