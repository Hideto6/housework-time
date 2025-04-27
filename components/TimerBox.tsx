import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,SafeAreaView  } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const TimerBox = () => {
    const [seconds, setSeconds] = useState(10 * 60); // 初期設定 10分
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let interval: NodeJS.Timeout;
      if (isRunning && seconds > 0) {
        interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
      } else if (seconds === 0) {
        clearInterval(interval);
        setIsRunning(false); // タイマー終了時に停止
      }
      return () => clearInterval(interval);
    }, [isRunning, seconds]);
  
    // タイマーリセット
    const resetTimer = () => {
      setSeconds(10 * 60);
      setIsRunning(false);
    };
  
    // 分と秒に変換
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    const timeString = `${minutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;


  return (
          <View style={styles.timerContainer}>
            <View style={styles.timerTitleContainer}>
              <MaterialCommunityIcons name="timer-outline" size={24} color="black" />
              <Text style={styles.titleText}> タイマー</Text>
            </View>
            <View style={styles.timerDisplayContainer}>
              <Text style={styles.timerText}>{timeString}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStart}
                onPress={() => setIsRunning((prev) => !prev)}
              >
                {isRunning ? (
                  <MaterialCommunityIcons name="pause" size={36} color="white" />
                ) : (
                  <MaterialCommunityIcons name="play" size={36} color="white" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonReset}
                onPress={resetTimer}
              >
                <MaterialCommunityIcons name="autorenew" size={36} color="white" />
              </TouchableOpacity>
            </View>
          </View>
  );
};
export default TimerBox;

const styles = StyleSheet.create({

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
    timerText: {
      fontSize: 64,
      fontFamily: 'Arial',
      color: '#007ACC',
      fontWeight: 'bold',
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
  