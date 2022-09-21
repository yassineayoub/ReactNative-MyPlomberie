import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ResultItem from '../components/ResultItem/ResultItem';
import { tubeDataBase } from '../data/data';

const Result = () => {
  const { equip } = useSelector((state) => state.equipementsReducer)
  const { selectedMaterial } = useSelector((state) => state.materialsReducer)

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
      {selectedMaterial 
      ? equipArray.map((item) => <ResultItem item={item} />)
      : <Text>Veuillez selectionner un materiaux</Text>
      }
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Result;
