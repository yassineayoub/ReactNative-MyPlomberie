import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Materials from '../../screens/Materials';
import Equipements from '../../screens/Equipements';
import Quantities from '../../screens/Quantities';
import Result from '../../screens/Result';

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
            title: "Liste d'équipements",
            headerStyle: {
              backgroundColor: '#0bb4ff',
              },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
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
          name="Materials"
          component={Materials}
          options={{
            title: "Materiaux",
            headerStyle: {
              backgroundColor: '#0bb4ff',
              },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
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
          name="Quantities"
          component={Quantities}
          options={{
            title: "Nombre d'appareils",
            headerStyle: {
              backgroundColor: '#0bb4ff',
              },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
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
        <Tab.Screen
          name="Result"
          component={Result}
          options={{
            title: "Dimensionnement des réseaux",
            headerStyle: {
              backgroundColor: '#0bb4ff',
              },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            tabBarLabel: 'Calculs',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                name="calculator"
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
