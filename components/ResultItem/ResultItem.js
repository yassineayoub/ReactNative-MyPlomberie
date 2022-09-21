import React from 'react'
import { Stack, Text, Surface } from '@react-native-material/core';
import { StyleSheet, View } from 'react-native'

const ResultItem = ({ item }) => {
  const { type, diamExt, ep } = item.tube;
  
  return (
      <Surface elevation={1} style={styles.surface}>
      <View>
        <Text color="primary" style={styles.header}>{item.name}</Text>
        <Stack style={{marginStart: 5}}>
          <Text >Diamètre intérieur minimal : {item.diamMin} mm</Text>
          <Text>Tube recommandé ( Øext x épaisseur ) : {type} {diamExt} x {ep} mm </Text> 
        </Stack>
        <Stack >
          <Text >Evacuation d'eau</Text>
          <Text>Diamètre d'évacuation recommandé : PVC Ø{item.diamEvac} mm </Text>
        </Stack>
        </View>
      </Surface>

  )
}

const styles = StyleSheet.create({
  header: {
    color: 'primary',
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
  },
  title: {
    textDecorationLine: 'underline',
  },
  surface: {
    // display: 'flex',
    // flexDirection: 'column',
    marginVertical: 5,
    paddingHorizontal: 10,
    // alignItems: 'center',
    // height: 100,
    width: '90%'
  },
})

export default ResultItem