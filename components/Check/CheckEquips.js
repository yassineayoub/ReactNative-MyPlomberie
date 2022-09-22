import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import CheckBox from '@react-native-community/checkbox';
import Checkbox from 'expo-checkbox';
import { StyleSheet, View } from 'react-native';
import { Text, Surface, Pressable } from '@react-native-material/core';
import { addSelectedEquip, setSelectedEquip } from '../../action/equipements';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckEquips = ({ name }) => {
  const [bool, setBool] = useState(false);
  const { equip } = useSelector((state) => state.equipementsReducer);
  useEffect(() => {
    if (equip.find((value) => value.name === name) !== undefined) {
      setBool(true);
    } else {
      setBool(false);
    }
  }, [equip]);
  const handleCheckBox = () => {
    setBool(!bool);
    dispatch(addSelectedEquip(name))
  }

  const dispatch = useDispatch();
  return (

    <Pressable style={styles.checkboxContainer} onPress={handleCheckBox}>
      <Surface elevation={2} category="medium" style={bool ? [styles.surfacePressed, styles.surface ]: styles.surface}>
        <Text variant="body1" style={styles.checkboxName}>
          {name}
        </Text>
        <Checkbox
          disabled={false}
          value={bool}
          style={styles.checkbox}
          onValueChange={handleCheckBox}
          // onChange={() => dispatch(addSelectedEquip(name))}
        />
      </Surface>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    marginHorizontal: 15,
  },

  checkboxName: {
    fontSize: 18,
    maxWidth: '80%'
  },
  checkbox: {
    height:30,
    width: 30,
    margin: 10,
    borderRadius: 30
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

export default CheckEquips;
