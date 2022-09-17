import { Button, Stack, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedEquip } from '../action/equipements';
import PickerList from '../components/PickerList/PickerList';
import { equipements } from '../data/data';


const Equipements = () => {
  const dispatch = useDispatch();
  const { equip } = useSelector((state) => state.equipementsReducer);
  console.log(equip)
  return (
    <View style={styles.section}>
      <View style={styles.headerContainer}>
        <Text variant="h5" style={styles.header}>
          Choisir un equipement
        </Text>
      </View>
      <PickerList datas={equipements} />
      <Stack center>
        <Button
          style={{ width: '50%' }}
          onPress={() => dispatch(addSelectedEquip())}
          title="Selectionner"
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
