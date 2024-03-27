import React from "react";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./src/navigation";
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import WishlistScreen from './src/screens/WishlistScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (

    <SafeAreaProvider >
      <GluestackUIProvider config={config}>
        <Navigation />
      </GluestackUIProvider>
    </SafeAreaProvider>

    /*
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component = {HomeScreen} />
        <Tab.Screen name="Wishlist" component = {WishlistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    */
  );
};

export default App;
