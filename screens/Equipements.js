/* eslint-disable react-native/no-inline-styles */
import { Button, Stack, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedEquip, resetSelectedEquip } from '../action/equipements';
import CheckEquips from '../components/Check/CheckEquips';
import PickerList from '../components/PickerList/PickerList';
import SelectedEquips from '../components/PickerList/SelectedEquips/SelectedEquips';
import { equipements } from '../data/data';

const Equipements = () => {
  const dispatch = useDispatch();
  const { equip } = useSelector((state) => state.equipementsReducer);
  console.log(equip);
  return (
    <View style={styles.section}>
      <View style={styles.headerContainer}>
        <Text variant="h5" style={styles.header}>
          Choisir un equipement
        </Text>
      </View>
      {equipements.map((equipement) => (
        <CheckEquips {...equipement} />
      ))}
      <Stack center>
        <Button
          style={{ width: '50%', marginTop: 10 }}
          onPress={() => dispatch(resetSelectedEquip())}
          title="Reinitialiser"
        />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
  },
  headerContainer: {
    borderWidth: 1,
    borderBottomWidth: 2,
    padding: 10,
    display: 'flex',
  },
  section: {
    marginBottom: 20,
  },
});

export default Equipements;
