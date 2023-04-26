import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Welcome from './screens/Welcome';
import Register from './screens/RegisterForm';
import Login from './screens/Login';
import Todo from './screens/Todo'
import Category from './screens/Category';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MyTab(){
    const theme = useTheme();
    return (
        <Tab.Navigator
          initialRouteName="Todo"
          screenOptions={({ route }) => ({
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.muted["800"] },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === "Todo") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Category") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              }
    
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.primary["800"],
            tabBarInactiveTintColor: theme.colors.muted["800"],
          })}
        >
          <Tab.Screen name="Todo" component={Todo} />
          <Tab.Screen name="Category" component={Category} />
        </Tab.Navigator>
      );
}
export default function Container(){
    // return <Todo/>;
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Todo" component={MyTab} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );  
}

