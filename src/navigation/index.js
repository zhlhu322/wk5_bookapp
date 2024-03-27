import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import WishlistScreen from '../screens/WishlistScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: '#666666',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: '#666666',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          title: "Wishlist",
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: '#666666',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          )

        }}
      />
      <Tab.Screen
        name="My books"
        component={WishlistScreen}
        options={{
          title: "My books",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          )

        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //headerShown: false
          title:''
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTintColor: '#000'
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;