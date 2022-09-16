import { Button } from '@react-native-material/core';
import React, { useRef, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PickerList from '../PickerList/PickerList';
import { equipements } from '../../data/data';

const App = () => {

  return (
    <SafeAreaView>
      <Button title="Ajouter" />
      <View>
        <PickerList datas={equipements} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  }
})
export default App;
