import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView  } from 'react-native';
import TimerBox from '@/components/TimerBox';
import HouseWorkTime from '@/components/HouseWorkTime';
import DateBox from '@/components/DateBox';


export default function HomeScreen() {
  // 今日の日付を取得

  return (
    <SafeAreaView style={styles.container}>
      {/* 日付 */}
      <DateBox/>
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
});
