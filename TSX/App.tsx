/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './HomeScreen';
import HomeScreen from './HomeScreen';
import NoticePage from './NoticePage';
import XemSan from './XemSan';
import CaNhan from './CaNhan';
import ChinhSua from './chinhsua';
import Lichdatsan from './Lichdatsan';
import Xacnhandatsan from './Xacnhandatsan';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown:false,
        }} />

        <Stack.Screen 
        name="Thông báo" 
        component={NoticePage} 
        options={{
          headerShown:false,
        }} />

        <Stack.Screen 
        name="Xem sân" 
        component={XemSan}
        options={{
          headerShown:false,
        }} />

        <Stack.Screen
        name="Cá nhân"
        component={CaNhan}
        options={{
          headerShown:false,
        }} />
         <Stack.Screen
        name="Sửa"
        component={ChinhSua}
        options={{
          headerShown:false,
        }} />
         <Stack.Screen
        name="Lịch"
        component={Lichdatsan}
        options={{
          headerShown:false,
        }} />
         <Stack.Screen
        name="Xác nhận"
        component={Xacnhandatsan}
        options={{
          headerShown:false,
        }} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
