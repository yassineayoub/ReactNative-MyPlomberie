import React from 'react'
import { Stack, Text, Surface, Divider } from '@react-native-material/core';
import { StyleSheet, View } from 'react-native'

const ResultItem = ({ item }) => {
  const { type, diamExt, ep } = item.tube;
  
  return (
      <Surface elevation={3} style={styles.surface}>
      <View>
        <Text variant='overline' style={styles.header}>{item.name}</Text>
        <View style={styles.container} spacing={5}>
        <Text style={[styles.subtitle,{ marginBottom: 15,}]} >Alimentation d'eau</Text>

            <Text style={styles.text} >Diamètre intérieur minimal : </Text>
            <Text style={[styles.text, styles.strong]}>{item.diamMin} mm</Text>
   
          <Stack spacing={5}>
            <Text style={styles.text}>Tube recommandé ( Øext x épaisseur ) : </Text> 
            <Text style={ [styles.text, styles.strong]}>{type} Ø{diamExt} x {ep} mm </Text>
          </Stack>
        </View>
        <Divider />
        <View style={styles.container} spacing={5} >
          <Text style={[styles.subtitle,{ marginBottom: 10}]}>Evacuation eaux usées</Text>
          <Text style={styles.text}>Diamètre d'évacuation recommandé : </Text>
          <Text style={[styles.text, styles.strong]}>PVC Ø{item.diamEvac} mm </Text>
        </View>
        </View>
      </Surface>

  )
}

const styles = StyleSheet.create({
  header: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    // width: '100%',
    fontWeight: 'bold',
    backgroundColor: '#023E8A',
    padding: 10,
  },
  subtitle: {
    textAlign: 'center' ,
    fontSize:18,
    fontStyle:'italic', 
    textDecorationLine:'underline',
  },
  strong: {
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    textDecorationLine: 'underline',
  },
  text: {
    textAlign: 'center',
    marginVertical: 3,
  },
  container: {
    marginVertical: 10,
  },
  surface: {
    // display: 'flex',
    // flexDirection: 'column',
    marginVertical: 5,
    borderRadius: 10,
    // paddingHorizontal: 10,
    // alignItems: 'center',
    // height: 100,
    width: '90%'
  },
})

export default ResultItem