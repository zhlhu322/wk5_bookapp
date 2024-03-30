import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Divider, Image, Input, HStack, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import WishlistScreen from '../screens/WishlistScreen';
import DevelopedScreen from'../screens/DevelopedScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView flex={1}>
      <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <Image
        h={48} w={48}
        source={"https://github.com/zhlhu322/wk5_bookapp/blob/master/assets/personal.png?raw=true"}
        alt='personalImage'
        mt={40} ml={16} mb={16}
        borderColor='#FFF'
        borderRadius={999}
      />
      <Text fontSize={24} fontWeight='500' ml={16} mb={16} color='black'>May</Text>
      <Divider my="$2" opacity={0.5}/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    </SafeAreaView>
    
  );
}

const MyDrawer = () =>{
  return (
    <Drawer.Navigator 
      initialRouteName="HomeStack"
      screenOptions={{
        drawerActiveBackgroundColor: "#FFFFFF",
        drawerStyle:{ width:300},
        drawerLabelStyle:{ fontSize:14, fontWeight:400 }
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="HomeStack" 
        component={MyTabs} 
        options={{
          headerShown: true,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
          headerShown:false
        }}
      />
      <Drawer.Screen 
        name="Account" 
        component={DevelopedScreen} 
        options={{
          headerShown: true,
          drawerLabel: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={20} />
          ),
          
        }}
      />
      <Drawer.Screen 
        name="Setting" 
        component={DevelopedScreen} 
        options={{
          headerShown: true,
          drawerLabel: "Setting",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={20} />
          ),
        }}
      />
    </Drawer.Navigator>
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
          ),
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
        component={DevelopedScreen}
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

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title:'',
          headerRight:()=>( <MaterialCommunityIcons name="magnify" size={24} onPress={()=>alert('You have touched Search')} /> ),
          headerShadowVisible:false,
          headerLeft: () =>(
            <MaterialCommunityIcons
              name="menu" size={24} onPress={ () => navigation.openDrawer()}
              style={{marginRight:20}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTintColor: '#000',
          headerTitle:'',
          headerRight:()=>( <HeaderIcon/> ),
          headerLeft: ()=>( <CustomBackButton/> )
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
    <TouchableOpacity onPress={handleIconPress} >
      <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
    </TouchableOpacity>
  );
};

const CustomBackButton = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={ handleBackPress }>
      <MaterialCommunityIcons name="chevron-left" size={30} />
    </TouchableOpacity>
  );
};

export default Navigation;