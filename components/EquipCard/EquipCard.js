import { Button, Stack, Surface, Text } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setPlusMinus } from '../../action/equipements';

const EquipCard = ({ name, count }) => {
  const dispatch = useDispatch();
  return (
    <Stack>
      <Surface elevation={1} category="medium" style={styles.surface}>
        <Text>{name}</Text>
        <Stack direction="row" spacing={30}>
          <View style={styles.counter}>
            <Text>x {count}</Text>
          </View>
          <Stack direction="row" spacing={5}>
            <Button
              style={styles.button}
              compact
              title="+"
              onPress={() => dispatch(setPlusMinus(name, 'plus'))}
            />
            <Button
              style={styles.button}
              compact
              title="-"
              onPress={() => dispatch(setPlusMinus(name, 'minus'))}
            />
          </Stack>
          <Stack direction="row" spacing={5}>
            <Button style={styles.button} color="error" compact title="X" />
          </Stack>
        </Stack>
      </Surface>
    </Stack>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
  },
  surface: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 100,
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EquipCard;
