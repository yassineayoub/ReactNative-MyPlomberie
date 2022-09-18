import { Button, Stack, Surface, Text } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Quantities = () => {
  return (
    <View>
      <Stack>
        <Surface elevation={1} category="medium" style={styles.surface}>
          <Text>Evier</Text>
          <Stack direction="row" spacing={30}>
            <Stack direction="row" spacing={5}>
              <Button style={styles.button} compact title="+" />
              <Button style={styles.button} compact title="-" />
            </Stack>
            <Stack direction="row" spacing={5}>
              <Button style={styles.button} color="error" compact title="X" />
            </Stack>
          </Stack>
        </Surface>
      </Stack>
    </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 100,
  },
});

export default Quantities;
