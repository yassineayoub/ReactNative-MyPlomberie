import { Button, Stack, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, SectionList, StyleSheet, View } from 'react-native';
import PickerList from '../components/PickerList/PickerList';
import { equipements, tubeDataBase } from '../data/data';
import Check from '../components/Check/Check';

const Equipements = () => {
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
          onPress={() => console.log('press')}
          title="Ajouter"
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
