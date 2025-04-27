import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const DateBox = () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();

  return (
    <View style={styles.dayContainer}>
        <View style={styles.dayTitleContainer}>
          <MaterialCommunityIcons name="calendar-blank" size={24} color="#28B4FF" />
          <Text style={styles.dayTitleText}>日付</Text>
        </View>
        <View style={styles.currentTimeContainer}>
          <Text style={styles.dateText}>{dateString}</Text>
        </View>
      </View>
  );
};
export default DateBox;

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
    dayTitleContainer: {
      width: 350,
      height: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 20,
    },
    currentTimeContainer: {
      width: 350,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    titleText: {
      fontSize: 22,
      fontFamily: 'Arial',
      color: '#E95A5A',
      fontWeight: 'bold',
    },
    dayTitleText: {
      fontSize: 20,
      fontFamily: 'Arial',
      color: '#28B4FF',
      fontWeight: 'bold',
    },
    dateText: {
        fontSize: 30,
        fontFamily: 'Arial',
        color: 'white',
      },
  });
  