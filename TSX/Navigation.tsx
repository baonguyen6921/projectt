/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import type { PropsWithChildren } from 'react';
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

import testFlatlistAPI from './TestFlatListAPI';
import MovieDetail2 from './MovieDetail2';


function navigate(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name='Movie List'
          component={testFlatlistAPI}
          options={{ title: 'Movie Explorer' }}
        />
        <Stack.Screen 
        name='Movie Detail'
        component={MovieDetail2}/>

      </Stack.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default navigate;
