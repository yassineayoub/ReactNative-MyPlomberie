import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Materials from '../../screens/Materials';
import Equipements from '../../screens/Equipements';
import Quantities from '../../screens/Quantities';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Equipements"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Equipements"
          component={Equipements}
          options={{
            tabBarLabel: 'Equipements',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="toilet"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Materiaux"
          component={Materials}
          options={{
            tabBarLabel: 'Materiaux',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="pipe"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Nombre d'equipements"
          component={Quantities}
          options={{
            tabBarLabel: 'Quantités',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-minus"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
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
