/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type { Node } from 'react';
 import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
 } from 'react-native';

 import AppNavigator from "./src/navigation";

 import { Provider } from 'react-redux';
 import Store from './src/store/store'
 
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
  //  const backgroundStyle = {
  //    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //  };
 
   return (
     <SafeAreaView  style={{ flex: 1 }}>
    
         <Provider store={Store}>
           <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}  />
           <AppNavigator />
         </Provider>
      
     </SafeAreaView>
   );
 };
 
 
 export default App;
 