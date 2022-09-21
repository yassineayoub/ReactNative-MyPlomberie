/* eslint-disable react-native/no-inline-styles */
import { Button, Stack, Text, Surface } from '@react-native-material/core';
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
  const [equips, setEquips] = useState(equipements.sort((a, b) => a.name.localeCompare(b.name)));
  const { equip } = useSelector((state) => state.equipementsReducer);

  return (
    <View style={styles.section}>
      <ScrollView>
        {equips.map((equipement) => (
          <CheckEquips {...equipement} key={equipement.name} />
        ))}
        <Stack center spacing={10} style={{marginTop: 10}}>
          <Button
            style={[styles.button.next,styles.button.btn]}
            onPress={() => navigation.navigate('Materiaux')}
            title="Suivant"
            />
          <Button
            style={[styles.button.err,styles.button.btn]}
            onPress={() => dispatch(resetSelectedEquip())}
            title="Reinitialiser"
          />
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
    height: 60,
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
    
  },
  section: {
    height: '100%',
  },
  button: {
    btn: {
      alignItems: 'center',
      width: "60%",
      padding: 5,
    },
    // backgroundColor: '#DDDDDD',
    next: {
      backgroundColor:'#0bb4ff',
    },
    err: {
      backgroundColor:'#e60049',
    },
  },
});

export default Equipements;
