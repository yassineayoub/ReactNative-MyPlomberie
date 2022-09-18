import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, View } from 'react-native';
import { Text } from '@react-native-material/core';
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
  const dispatch = useDispatch();
  return (
    <View style={styles.checkboxContainer}>
      <Text variant="body1" style={styles.checkboxName}>
        {name}
      </Text>
      <CheckBox
        disabled={false}
        value={bool}
        // onValueChange={(newValue) => setBool(newValue)}
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
