import { Button } from '@react-native-material/core';
import { NavigationContainer } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PickerList from '../PickerList/PickerList';
import { equipements } from '../../data/data';
import 'react-native-gesture-handler';
import Main from '../Main/Main';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyPlomberie" component={Main} />
        {/* <Stack.Screen name="ColorPalette" component={ColorPalette} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
export default App;
