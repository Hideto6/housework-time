import React, { useState, useEffect } from 'react';
import { StyleSheet,View,Text,Button} from 'react-native';
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
        <Text style={styles.timerText}>{timeString}</Text>
        <Button
          title={isRunning ? "停止" : "開始"}
          onPress={() => setIsRunning((prev) => !prev)}
        />
        <Button title="リセット" onPress={resetTimer} />
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
    height: 400,
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
    fontSize: 30,
    fontFamily: 'Arial', 
    color: 'black',
  },
  dateText: {
    fontSize: 30, 
    fontFamily: 'Arial',  
    color: '#000',  
  },
});