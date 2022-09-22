import { Stack, Text, Button } from '@react-native-material/core';
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
      <Stack direction="column" justify="between" style={styles.section}>
        <View>
          {materials.map((material) => (
            <Check key={material} name={material} />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={[styles.button.next,styles.button.btn]}
            onPress={() => navigation.navigate('Quantities')}
            title="Suivant"
            />
          </View>
      </Stack>
  );
};
const styles = StyleSheet.create({
  section: {
    height: '98%',
    display: 'flex',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    btn: {
      margin: 20,
      alignItems: 'center',
      width: '90%',
      padding: 5,
      backgroundColor: '#48CAE4',
    },
    err: {
      backgroundColor:'#e60049',
    },
  },
});

export default Materials;
