import React, { useEffect, useRef, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedEquip } from '../../action/equipements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PickerList = ({ datas }) => {
  const { selectedEquipement, equip } = useSelector(
    (state) => state.equipementsReducer,
  );
  const dispatch = useDispatch();

  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }
  return (
    <Picker
      numberOfLines={1}
      ref={pickerRef}
      selectedValue={selectedEquipement}
      onValueChange={(itemValue, itemIndex) =>
        dispatch(setSelectedEquip(itemValue))
      }>
      {datas.map(({ name }) => (
        <Picker.Item
          key={name}
          color={equip.includes(name) ? 'green' : ''}
          label={name}
          value={name}
        />
      ))}
    </Picker>
  );
};

export default PickerList;
