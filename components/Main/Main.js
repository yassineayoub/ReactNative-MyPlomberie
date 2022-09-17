import { Button, Stack } from '@react-native-material/core';
import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PickerList from '../PickerList/PickerList';
import { equipements } from '../../data/data';

const Main = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.header}>Choisir un equipement:</Text>
        <PickerList datas={equipements} />
        <Stack center>
          <Button
            style={{ width: '50%' }}
            onPress={() => console.log('press')}
            title="Ajouter"
          />
        </Stack>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Main;
