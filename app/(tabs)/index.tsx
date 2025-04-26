import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,SafeAreaView  } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  // 今日の日付を取得
  const today = new Date();
  const dateString = today.toLocaleDateString();

  const [seconds, setSeconds] = useState(10 * 60); // 初期設定 10分
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
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
      <View style={styles.houseworkContainer}>
        <View style={styles.houseworkTitleContainer}>
          <MaterialCommunityIcons name="lightbulb-on" size={30} color="#FFDB10" />
          <Text style={styles.titleText}> 今日の家事タイム</Text>
        </View>
        <View style={styles.placeContainer}>
          <Text style={styles.houseworkText}>リビング</Text>
          <MaterialCommunityIcons name="vacuum" size={40} color="black" />
        </View>
        <View style={styles.nextHouseworkContainer}>
          <Text style={styles.nextHomeworkText}>次回の家事タイム...</Text>
        </View>
      </View>

      {/* タイマー */}
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
  nextHomeworkText: {
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
