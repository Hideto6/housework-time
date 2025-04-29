import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useHousework } from '@/hooks/useHouseworkContext';

const getTodayJapaneseWeekday = () => {
  const days = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
  const today = new Date();
  return days[today.getDay()];
};

const categoryIcons = {
  掃除: 'vacuum',
  洗濯: 'tshirt-crew',
  ゴミ出し: 'trash-can',
};

const HouseWorkTime = () => {
  const { houseworkList } = useHousework();
  const today = getTodayJapaneseWeekday();

  // 今日の曜日に該当する家事だけを抽出
  const todayTasks = houseworkList.filter((item) => item.week === today);

//曜日の順番定義
const weekOrder = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
const todayIndex = weekOrder.indexOf(today);

//次回の曜日を探す
const getNextTaskDay = () => {
    for (let i = 1; i <= 7; i++) {
      const nextDay = weekOrder[(todayIndex + i) % 7];
      const hasTask = houseworkList.some((item) => item.week === nextDay);//some関数⇒一つでも一致したらtrueを返す
      if (hasTask) return nextDay;
    }
    return null;
  };
  
  const nextTaskDay = getNextTaskDay();
  

  return (
    <View style={styles.houseworkContainer}>
      <View style={styles.houseworkTitleContainer}>
        <MaterialCommunityIcons name="lightbulb-on" size={30} color="#FFDB10" />
        <Text style={styles.titleText}> 今日の家事タイム</Text>
      </View>

      {todayTasks.length > 0 ? (
        todayTasks.map((task, index) => (
          <View style={styles.placeContainer} key={index}>
            <Text style={styles.houseworkText}>{task.text}　</Text>
            <MaterialCommunityIcons
              name={categoryIcons[task.category] || 'checkbox-blank-circle-outline'}
              size={35}
              color="#008CFF"
            />
          </View>
        ))
      ) : (
        <View style={styles.placeContainer}>
          <Text style={styles.noHouseworkText}>今日は家事がありません！</Text>
        </View>
      )}

      <View style={styles.nextHouseworkContainer}>
        <Text style={styles.nextTitleText}>次回の家事タイム..</Text>
        <View style={styles.nextTask}>
            <Text style={styles.nextTaskText}>
                {nextTaskDay ? nextTaskDay : 'なし'}
            </Text>
        </View>
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
      height:280,
      paddingVertical: 20,
      borderRadius: 15,
      marginVertical: 10,
      backgroundColor: 'white',
      justifyContent: 'space-between',
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
      height:35,
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
      marginRight:20,
    },
    nextTask: {
        flexDirection: 'row',
        alignItems: 'center',
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
      noHouseworkText: {
        fontSize: 23,
        fontFamily: 'Arial',
        color: 'black',
        fontWeight: 'bold',
      },
      nextTitleText: {
        fontSize: 15,
        fontFamily: 'Arial',
        color: 'black',
        fontWeight: 'bold',
        marginRight:10,
      },
      nextTaskText: {
        fontSize: 15,
        fontFamily: 'Arial',
        color: '#006AFF',
        fontWeight: 'bold',
      },
  });
  