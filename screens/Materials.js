import { Stack, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Check from '../components/Check/Check';
import { tubeDataBase } from '../data/data';

const Materials = ({ navigation }) => {
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
      <View style={{ marginTop: 20 }}>
        {materials.map((material) => (
          <Check key={material} material={material} />
        ))}
      </View>
      <Stack center>
        <TouchableOpacity
          style={[styles.button, { width: '50%', marginVertical: 10 }]}
          onPress={() => navigation.navigate('Quantities')}>
          <Text>Suivant</Text>
        </TouchableOpacity>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
});

export default Materials;
