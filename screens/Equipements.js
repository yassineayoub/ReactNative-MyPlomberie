/* eslint-disable react-native/no-inline-styles */
import { Button, Stack, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedEquip, resetSelectedEquip } from '../action/equipements';
import CheckEquips from '../components/Check/CheckEquips';
import PickerList from '../components/PickerList/PickerList';
import SelectedEquips from '../components/PickerList/SelectedEquips/SelectedEquips';
import { equipements } from '../data/data';
import { Link } from '@react-navigation/native';

const Equipements = ({ navigation }) => {
  const dispatch = useDispatch();
  const [equips, setEquips] = useState(equipements);
  const { equip } = useSelector((state) => state.equipementsReducer);

  return (
    <View style={styles.section}>
      <View style={styles.headerContainer}>
        <Text variant="h5" style={styles.header}>
          Choisir vos equipements
        </Text>
      </View>
      <ScrollView>
        {equips.map((equipement) => (
          <CheckEquips {...equipement} key={equipement.name} />
        ))}
        <Stack center>
          <Button
            style={{ width: '50%', marginTop: 10 }}
            onPress={() => dispatch(resetSelectedEquip())}
            title="Reinitialiser"
          />
          <TouchableOpacity
            style={[styles.button, { width: '50%', marginVertical: 10 }]}
            onPress={() => navigation.navigate('Materials')}>
            <Text>Suivant</Text>
          </TouchableOpacity>
        </Stack>
      </ScrollView>
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
    height: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Equipements;
