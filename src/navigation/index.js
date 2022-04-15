import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, StackActions } from '@react-navigation/native';
import { View, useWindowDimensions, TouchableOpacity, Text, Image } from 'react-native';
import {
  SplashScreen
} from '../view';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,

};


function AppNavigator() {

 

  return (
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator headerMode={"none"} initialRouteName={"SplashScreen"}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default AppNavigator;
