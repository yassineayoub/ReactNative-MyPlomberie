import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, View } from 'react-native';

import { setSelectedMat } from '../../action/materials';
import { Text } from '@react-native-material/core';

const Check = ({ material }) => {
  const { selectedMaterial } = useSelector((state) => state.materialsReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.material}>
      <Text variant="body1" style={styles.materialName}>
        {material}
      </Text>
      <CheckBox
        style={styles.checkbox}
        disabled={false}
        value={selectedMaterial === material}
        // onValueChange={(newValue) => setToggleCheckBox(newValue)}
        onChange={() => dispatch(setSelectedMat(material))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  material: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginVertical: 5,
  },
  materialName: {
    width: '50%',
  },
});

export default Check;
