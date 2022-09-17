import React, { useEffect, useRef, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedEquip } from '../../action/equipements';

const PickerList = ({ datas }) => {
  const { selectedEquipement } = useSelector(
    (state) => state.equipementsReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedEquipement) {
      dispatch(setSelectedEquip(datas[0].name));
    }
  }, []);

  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }
  return (
    <Picker
      numberOfLines={2}
      ref={pickerRef}
      selectedValue={selectedEquipement}
      onValueChange={(itemValue, itemIndex) =>
        dispatch(setSelectedEquip(itemValue))
      }>
      {datas.map(({ name }) => (
        <Picker.Item key={name} label={name} value={name} />
      ))}
    </Picker>
  );
};

export default PickerList;
