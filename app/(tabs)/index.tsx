import React, { useState, useEffect } from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';
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
      setIsRunning(false); // タイマーが終了したら停止
    }

    return () => clearInterval(interval); // クリーンアップ
  }, [isRunning, seconds]);

  // タイマーのリセット
  const resetTimer = () => {
    setSeconds(10 * 60); // 10分にリセット
    setIsRunning(false); // 停止
  };

  // 時間と分に変換
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const timeString = `${minutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;



  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.dateText}>{dateString}</Text>
      </View>
      <View style={styles.houseworkContainer}>
        <Text style={styles.todaysHomeworkText}>今日の家事タイム</Text>
        <View style={styles.placecontainer}>
          <Text style={styles.homeworkText}>リビング　</Text>
          <MaterialCommunityIcons name="vacuum" size={40} color="black" />
        </View>
        <View style={styles.nextHomeworkContainer}>
          <Text style={styles.nextHomeworkText}>次回の家事タイム...</Text>
        </View>
      </View>
      <View style={styles.timerContainer}>
        <View style={styles.counterContainer}>
          <Text style={styles.timerText}>{timeString}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={() => setIsRunning((prev) => !prev)}
          >
            <Text style={styles.buttonText}>{isRunning ? 
              <MaterialCommunityIcons name="pause" size={40} color="white" /> 
              : <MaterialCommunityIcons name="play" size={40} color="white" />}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonReset}
            onPress={resetTimer}
          >
            <MaterialCommunityIcons name="autorenew" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'white',
  },
  dayContainer:{
    width: 300,
    height: 100,
    borderColor: '#d2d2d2',
    borderWidth: 1,
    borderRadius: 10,
    marginTop:10,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000',  // 影の色
    shadowOffset: { width: 0, height: 2 },  // 影の位置
    shadowOpacity: 0.3,  // 影の透明度
    shadowRadius: 4,  // 影のぼかしの半径
    elevation: 5,  // Android用
  },
  houseworkContainer:{
    width: 300,
    height: 300,
    borderColor: '#d2d2d2',
    borderWidth: 1,
    borderRadius: 10,
    marginTop:10,
    backgroundColor:'white',
    justifyContent:'space-around',
    alignItems:'center',
    shadowColor: '#000',  // 影の色
    shadowOffset: { width: 0, height: 2 },  // 影の位置
    shadowOpacity: 0.3,  // 影の透明度
    shadowRadius: 4,  // 影のぼかしの半径
    elevation: 5,  // Android用
  },
  timerContainer:{
    width: 300,
    height: 200,
    borderColor: '#d2d2d2',
    borderWidth: 1,
    borderRadius: 10,
    marginTop:10,
    backgroundColor:'white',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    shadowColor: '#000',  // 影の色
    shadowOffset: { width: 0, height: 2 },  // 影の位置
    shadowOpacity: 0.3,  // 影の透明度
    shadowRadius: 4,  // 影のぼかしの半径
    elevation: 5,  // Android用
  },
  counterContainer: {
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    flexDirection:'row',

  },
  buttonContainer: {
    width: 300,
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'white',
    flexDirection:'row',

  },
  placecontainer: {
    width: 300,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    flexDirection:'row',
  },
  nextHomeworkContainer: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:'white',
    flexDirection:'row',
  },
  todaysHomeworkText: {
    fontSize: 25,
    fontFamily: 'Arial', 
    color: '#E95A5A',
    fontWeight:'bold',
  },
  homeworkText: {
    fontSize: 30,
    fontFamily: 'Arial', 
    color: 'black',
    fontWeight:'bold',
  },
  nextHomeworkText: {
    fontSize: 15,
    fontFamily: 'Arial', 
    color: 'black',
    fontWeight:'bold',
    paddingRight:50,
  },
  timerText: {
    fontSize: 60,
    fontFamily: 'Arial', 
    color: 'blue',
  },
  dateText: {
    fontSize: 30, 
    fontFamily: 'Arial',  
    color: '#000',  
  },
  buttonStart: {
    backgroundColor: '#3EAAFC',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#3EAAFC',  // 影の色
    shadowOpacity: 0.8,  // 影の透明度
    shadowOffset: { width: 0, height: 2 },  // 影の位置
    shadowRadius: 7,  // 影のぼかしの半径
    elevation: 5,  // Android用
  },
  buttonReset: {
    backgroundColor: '#3EAAFC',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#3EAAFC',  // 影の色
    shadowOpacity: 100,  // 影の透明度
    shadowOffset: { width: 0, height: 2 },  // 影の位置
    shadowRadius: 7,  // 影のぼかしの半径
    elevation: 5,  // Android用
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});