import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,SafeAreaView  } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HouseWorkTime = () => {
  return (
    <View style={styles.houseworkContainer}>
    <View style={styles.houseworkTitleContainer}>
      <MaterialCommunityIcons name="lightbulb-on" size={30} color="#FFDB10" />
      <Text style={styles.titleText}> 今日の家事タイム</Text>
    </View>
    <View style={styles.placeContainer}>
      <Text style={styles.houseworkText}>リビング　</Text>
      <MaterialCommunityIcons name="vacuum" size={40} color="black" />
    </View>
    <View style={styles.nextHouseworkContainer}>
      <Text style={styles.nextHouseworkText}>次回の家事タイム..</Text>
    </View>
  </View>
  );
};
export default HouseWorkTime;

const styles = StyleSheet.create({
    dayContainer: {
      width: 360,
      paddingVertical: 10,
      borderColor: '#BAE7FF',
      borderWidth: 1,
      borderRadius: 15,
      marginVertical: 10,
      backgroundColor: '#BAE7FF',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
    houseworkContainer: {
      width: 330,
      paddingVertical: 20,
      borderRadius: 15,
      marginVertical: 10,
      backgroundColor: 'white',
      justifyContent: 'space-around',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,  //影の濃さ
      shadowRadius: 4,
      elevation: 3,  //android用
    },
    houseworkTitleContainer: {
      width: 290,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    placeContainer: {
      width: 280,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    nextHouseworkContainer: {
      width: 280,
      height: 50,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    titleText: {
        fontSize: 22,
        fontFamily: 'Arial',
        color: '#E95A5A',
        fontWeight: 'bold',
      },
      houseworkText: {
        fontSize: 30,
        fontFamily: 'Arial',
        color: 'black',
        fontWeight: 'bold',
      },
      nextHouseworkText: {
        fontSize: 15,
        fontFamily: 'Arial',
        color: 'black',
        fontWeight: 'bold',
        paddingRight: 50,
      },
  });
  