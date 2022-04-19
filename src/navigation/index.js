import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, StackActions } from '@react-navigation/native';
import { View, useWindowDimensions, TouchableOpacity, Text, Image } from 'react-native';
import {
  SplashScreen,
  SplashEnd,Welcome,
  Signin,
  Register,
  ForgotPassword,
  ForgotPasswordVerify,
  ForgotPasswordSet
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
        <Stack.Screen name="SplashEnd" component={SplashEnd} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signin" component={Signin}   />
        <Stack.Screen name="Register" component={Register}   />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}   />
        <Stack.Screen name="ForgotPasswordVerify" component={ForgotPasswordVerify}   />
        <Stack.Screen name="ForgotPasswordSet" component={ForgotPasswordSet}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default AppNavigator;
