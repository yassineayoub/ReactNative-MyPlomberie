import React, { useRef, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '../../action/equipements';

const PickerList = ({ datas }) => {
  const { selectedEquipement } = useSelector(
    (state) => state.equipementsReducer,
  );
  console.warn(selectedEquipement)

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
      ref={pickerRef}
      selectedValue={selectedEquipement}
      onValueChange={(itemValue, itemIndex) =>
        dispatch(setSelected(itemValue))
      }>
      {datas.map(({ name }) => (
        <Picker.Item key={name} label={name} value={name} />
      ))}
    </Picker>
  );
};

export default PickerList;
