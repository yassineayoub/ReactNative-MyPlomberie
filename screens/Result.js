import React, { useEffect } from 'react'
import { Button } from '@react-native-material/core';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ResultItem from '../components/ResultItem/ResultItem';
import { tubeDataBase } from '../data/data';

const Result = ({ navigation }) => {
  const { equip } = useSelector((state) => state.equipementsReducer)
  const { selectedMaterial } = useSelector((state) => state.materialsReducer)
  const error = (screen, title) => (
      <Button
        style={styles.button.btn}
        onPress={() => navigation.navigate(screen)}
        title={`Choisir un ${title}`}
        />
  )
  const equipArray = [...equip];

    if (selectedMaterial !== null) {
      equipArray.forEach((equip) => {
        let arr = [];
        tubeDataBase.forEach((t) => {
        if (t.type === selectedMaterial && t.diamInt >= equip.diamMin ) {
            arr.push(t);
          }
        });
        equip.tube = arr[0];
      })
    }
  

  return (
    <ScrollView >
      <View style={styles.container}>
        {selectedMaterial && equip.length > 0
        ? equipArray.map((item) => <ResultItem key={item.name} item={item} />)
        : (selectedMaterial ? error('Equipements', 'équipement') : error('Materials', 'materiau') )
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    
    // justifyContent: 'center'
  },
  button: {
    btn: {
      alignItems: 'center',
      width: "90%",
      margin: 20,
      alignItems: 'center',
      padding: 5,
      flex: 1,
      // marginTop: 50,
      justifyContent: 'center',
      backgroundColor:'#e60049',
    },
    err: {
      backgroundColor:'#e60049',
      alignItems: 'center',
      width: "90%",
      padding: 5,
    },
  },
});

export default Result;
