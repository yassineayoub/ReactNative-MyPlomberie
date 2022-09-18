import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, View } from 'react-native';
import { Text } from '@react-native-material/core';
import { addSelectedEquip, setSelectedEquip } from '../../action/equipements';

const CheckEquips = ({ name }) => {
  const { selectedEquipement, equip } = useSelector(
    (state) => state.equipementsReducer,
  );
  const dispatch = useDispatch();
  return (
    <View style={styles.checkboxContainer}>
      <Text variant="body1" style={styles.checkboxName}>
        {name}
      </Text>
      <CheckBox
        disabled={false}
        value={equip.includes(name)}
        // onValueChange={(newValue) => setToggleCheckBox(newValue)}
        onChange={() => dispatch(addSelectedEquip(name))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginVertical: 5,
  },
  checkboxName: {
    width: '50%',
  },
});

export default CheckEquips;
