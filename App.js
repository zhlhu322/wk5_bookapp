import React from "react";
import { SafeAreaView, SafeAreaProvider, View } from 'react-native-safe-area-context';
import Navigation from "./src/navigation";
import { GluestackUIProvider, ScrollView } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


//const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
          <Navigation/>
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
