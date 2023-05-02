import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import Welcome from './screens/Welcome';
import Register from './screens/RegisterForm';
import Login from './screens/Login';
import Todo from './screens/Todo'
import Category from './screens/Category';
import List from './screens/List'
import Detail from './screens/Detail';


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
              let iconType;
              let iconStyle;
    
              if (route.name === "Todo") {
                iconName = "clipboard-list";
                iconType = "FontAwesome5";
                iconStyle = focused ? "#FF5555" : "#D9D9D9";
              } else if (route.name === "Category") {
                iconName = "category"
                iconType = " MaterialIcons";
                iconStyle = focused ? "#FF5555" : "#D9D9D9";
              } else if (route.name === "List") {
                iconName = "playlist-add"
                iconType = " MaterialIcons";
                iconStyle = focused ? "#FF5555" : "#D9D9D9";
              }
              return iconType=="FontAwesome5" ? ( 
                <FontAwesome5 name={iconName} size={24} color={iconStyle} />
              ) : (
                <MaterialIcons name={iconName} size={24} color={iconStyle} />
              )
            },
            tabBarActiveTintColor: theme.colors.primary["800"],
            tabBarInactiveTintColor: theme.colors.muted["800"],
          })}
        >
          <Tab.Screen name="Todo" component={Todo} options={{ title:"", unmountOnBlur:true}} />
          <Tab.Screen name="List" component={List} options={{headerShown: false}} />
          <Tab.Screen name="Category" component={Category} options={{headerShown: false}} />
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
                <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );  
}

