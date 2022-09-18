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
  return (
    <ScrollView>
      {equip.map((eq) => (
        <EquipCard {...eq} key={eq.name} />
      ))}
    </ScrollView>
  );
};

export default Quantities;
