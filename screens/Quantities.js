import { Button, Stack, Surface, Text } from '@react-native-material/core';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import EquipCard from '../components/EquipCard/EquipCard';

const Quantities = ({ navigation }) => {
  const dispatch = useDispatch();
  const { equip } = useSelector((state) => state.equipementsReducer);
  equip.sort((a, b) => a.name.localeCompare(b.name));
  const error = () => (
    <Button
      style={styles.button.btn}
      onPress={() => navigation.navigate('Equipements')}
      title="Choisir un équipement"
      />
  )
  

  return (
    <ScrollView >
    <Stack direction="column" justify="between" style={styles.section}>

      <View style={styles.card} >
        {equip.map((eq) => (
          <EquipCard {...eq} key={eq.name} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {equip.length > 0 
        ?
            <Button
              style={[styles.button.next,styles.button.btn]}
              onPress={() => navigation.navigate('Result')}
              title="Calculer"
              />
        : error()
        }
      </View>
    </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',
  },
  card: {
    width: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },  
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    btn: {
      margin: 20,
      alignItems: 'center',
      width: '90%',
      padding: 5,
    },
    err: {
      backgroundColor:'#e60049',
    },
  },
});

export default Quantities;
