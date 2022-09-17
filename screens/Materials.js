import { Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Check from '../components/Check/Check';
import { tubeDataBase } from '../data/data';

const Materials = () => {
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
    <View>
      <View style={styles.headerContainer}>
        <Text variant="h5" style={[styles.header]}>
          Choisir un matériau
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        {materials.map((material) => (
          <Check key={material} material={material} />
        ))}
      </View>
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

export default Materials;
