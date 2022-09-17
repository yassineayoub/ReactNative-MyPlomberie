import { Button, Stack, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, SectionList, StyleSheet, View } from 'react-native';
import PickerList from '../PickerList/PickerList';
import { equipements, tubeDataBase } from '../../data/data';
import Check from '../Check/Check';

const Main = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    tubeDataBase.reduce((arr, value) => {
      materials.includes(value.type)
        ? ''
        : setMaterials([...materials, value.type]);
      return arr;
    }, []);
  }, [materials]);

  return (
    <SafeAreaView>
      <View style={styles.section}>
        <View style={styles.headerContainer}>
          <Text variant="h5" style={styles.header}>Choisir un equipement:</Text>
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

      <View>
        <View style={styles.headerContainer}>
          <Text variant="h5" style={[styles.header]}>Choisir un matériau :</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          {materials.map((material) => (
            <Check key={material} material={material} />
          ))}
        </View>
      </View>
    </SafeAreaView>
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

export default Main;
