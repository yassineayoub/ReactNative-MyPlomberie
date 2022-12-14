import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import CheckBox from '@react-native-community/checkbox';
import { Pressable, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { setSelectedMat } from '../../action/materials';
import { Text, Surface } from '@react-native-material/core';

const Check = ({ name }) => {
  const [bool, setBool] = useState(false);
  const { selectedMaterial } = useSelector((state) => state.materialsReducer);
  const dispatch = useDispatch();
  const handleCheckBox = () => {
    setBool(!bool);
    dispatch(setSelectedMat(name));
  };
  return (
    <Pressable style={styles.checkboxContainer} onPress={handleCheckBox}>
      <Surface
        elevation={2}
        category="medium"
        style={
          selectedMaterial === name
            ? [styles.surfacePressed, styles.surface]
            : styles.surface
        }
      >
        <Text variant="body1" style={styles.checkboxName}>
          {name}
        </Text>
        <Checkbox
          disabled={false}
          value={selectedMaterial === name}
          style={styles.checkbox}
          // onChange={(e) => console.log(e)}
          onValueChange={handleCheckBox}
        />
      </Surface>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    marginHorizontal: 15,
    width: '90%',
  },

  checkboxName: {
    fontSize: 18,
    maxWidth: '80%',
  },
  checkbox: {
    height: 30,
    width: 30,
    margin: 10,
    borderRadius: 30,
  },
  surface: {
    flexDirection: 'row',
    marginVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
    height: 70,
  },
  surfacePressed: {
    backgroundColor: '#90E0EF',
  },
});

export default Check;
