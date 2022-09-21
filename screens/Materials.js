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
      <Stack style={styles.section}>

        {materials.map((material) => (
          <Check key={material} name={material} />
        ))}
        
      <Button
        style={[styles.button.next,styles.button.btn]}
        onPress={() => navigation.navigate('Quantities')}
        title="Suivant"
        />
      </Stack>
  );
};
const styles = StyleSheet.create({
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
    alignItems: 'center'
  },
  button: {
    btn: {
      marginTop: 15,
      alignItems: 'center',
      width: '90%',
      padding: 5,
    },
    // backgroundColor: '#DDDDDD',
    // next: {
    //   backgroundColor:'#0bb4ff',
    // },
    err: {
      backgroundColor:'#e60049',
    },
  },
});

export default Materials;
