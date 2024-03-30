import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import WishlistScreen from '../screens/WishlistScreen';
import { ScrollView } from '@gluestack-ui/themed';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <MyTabs/>
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
          title:'',
          headerRight:()=>( <MaterialCommunityIcons name="magnify" size={24}/> ),
          headerShadowVisible:false
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTintColor: '#000',
          headerTitle:'',
          headerRight:()=>( <HeaderIcon/> ),
          headerLeft: ()=>( <MaterialCommunityIcons name="chevron-left" size={30}/> )
        }}
      />
    </Stack.Navigator>
  );
}

const HeaderIcon = () => {
  const [iconName, setIconName] = useState('bookmark-outline'); 
  const [iconColor, setIconColor] = useState('black');
  
  const handleIconPress = () => {
    const newIconName = iconName === 'bookmark-outline' ? 'bookmark' : 'bookmark-outline';
    const newIconColor = iconColor === 'black' ? '#6200EE' : 'black';
    setIconName(newIconName);
    setIconColor(newIconColor);
  };

  return (
    <TouchableOpacity onPress={handleIconPress}>
      <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
    </TouchableOpacity>
  );
};

export default Navigation;