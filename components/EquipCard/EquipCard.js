import { Button, Stack, Surface, Text, IconButton } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeEquip, setPlusMinus } from '../../action/equipements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const EquipCard = ({ name, count }) => {
  const dispatch = useDispatch();
  return (
      <Surface elevation={1} category="medium" style={styles.surface}>
        <Text>{name}</Text>
        <Stack direction="row" spacing={30}>
          <View style={styles.counter}>
            <Text>x {count}</Text>
          </View>
          <Stack direction="row" spacing={5}>
            <IconButton
              icon={props => <FontAwesome style={styles.button} name='plus' {...props} />}
              color="primary"
              onPress={() => dispatch(setPlusMinus(name, 'plus'))}
            />
            <IconButton
              icon={props => <FontAwesome style={styles.button} name='minus' {...props} />}
              color="primary"
              onPress={() => dispatch(setPlusMinus(name, 'minus'))}
            />
          </Stack>
          <Stack direction="row" sx={{alignItems: 'center'}} spacing={5}>
          <IconButton
            icon={props => <MaterialCommunityIcons style={styles.button} name='delete' {...props} />}
            color="error"
            size={45}
            onPress={() => dispatch(removeEquip(name))}
          />
            {/* <Button
              style={styles.button}
              color="error"
              compact
              
              onPress={() => dispatch(removeEquip(name))}
            /> */}
          </Stack>
        </Stack>
      </Surface>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 40
  },
  surface: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 100,
    width: '90%'
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EquipCard;
