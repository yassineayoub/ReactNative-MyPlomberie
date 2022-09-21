import { Button, Stack, Surface, Text } from '@react-native-material/core';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import EquipCard from '../components/EquipCard/EquipCard';

const Quantities = () => {
  const dispatch = useDispatch();
  const { equip } = useSelector((state) => state.equipementsReducer);
  equip.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ScrollView >
      <View style={styles.section}>
        {equip.map((eq) => (
          <EquipCard {...eq} key={eq.name} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
    
  },
  section: {
    height: '100%',
    alignItems: 'center'
  },
  button: {
    btn: {
      marginTop: 15,
      alignItems: 'center',
      width: '90%',
      padding: 5,
    },
    // backgroundColor: '#DDDDDD',
    // next: {
    //   backgroundColor:'#0bb4ff',
    // },
    err: {
      backgroundColor:'#e60049',
    },
  },
});

export default Quantities;
