import React, { useRef, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const PickerList = ({ datas, onChange }) => {
  const [selectedEquipement, setSelectedEquipement] = useState('test');
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
      onValueChange={(itemValue, itemIndex) => onChange(itemValue)}>
      {datas.map(({ name }) => (
        <Picker.Item label={name} value={name} />
      ))}
    </Picker>
  );
};

export default PickerList;
