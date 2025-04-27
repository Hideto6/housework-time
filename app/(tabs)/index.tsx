import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,SafeAreaView  } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TimerBox from '@/components/TimerBox';
import HouseWorkTime from '@/components/HouseWorkTime';

export default function HomeScreen() {
  // 今日の日付を取得
  const today = new Date();
  const dateString = today.toLocaleDateString();

  return (
    <SafeAreaView style={styles.container}>
      {/* 日付 */}
      <View style={styles.dayContainer}>
        <View style={styles.dayTitleContainer}>
          <MaterialCommunityIcons name="calendar-blank" size={24} color="#28B4FF" />
          <Text style={styles.dayTitleText}>日付</Text>
        </View>
        <View style={styles.currentTimeContainer}>
          <Text style={styles.dateText}>{dateString}</Text>
        </View>
      </View>


      {/* 今日の家事タイム */}
      <HouseWorkTime/>
      
      {/* タイマー*/}
      <TimerBox/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F0F8FF',
    paddingTop: 15,
  },
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
  timerContainer: {
    width: 330,
    paddingVertical: 20,
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: '#E6FBFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,  //影の濃さ
    shadowRadius: 4,
    elevation: 3,  //android用
  },
  timerTitleContainer: {
    width: 290,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  timerDisplayContainer: {
    width: 280,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 280,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
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
  timerText: {
    fontSize: 64,
    fontFamily: 'Arial',
    color: '#007ACC',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 30,
    fontFamily: 'Arial',
    color: 'white',
  },
  buttonStart: {
    width: 70,
    height: 70,
    backgroundColor: '#3EAAFC',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3EAAFC',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  buttonReset: {
    width: 70,
    height: 70,
    backgroundColor: '#FF6B6B',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF6B6B',
    shadowOpacity: 0.5, //影の濃さ
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5, //android用
  },
});
