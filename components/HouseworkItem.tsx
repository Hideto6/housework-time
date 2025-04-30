import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// 曜日ごとの色
const weekColors = {
  '月曜日': '#FDBDFF',
  '火曜日': '#FFC38B', 
  '水曜日': '#79B1FF', 
  '木曜日': '#8BFF93', 
  '金曜日': '#F7FF8B', 
  '土曜日': '#8B95FF', 
  '日曜日': '#FF7979', 
};

// カテゴリーに対応するアイコン
const categoryIcons = {
  '掃除': 'vacuum',
  '洗濯': 'tshirt-crew',
  'ゴミ出し': 'trash-can',
};

// 曜日短縮
const shortWeekday = (day) => {
  const map = {
    '月曜日': '月',
    '火曜日': '火',
    '水曜日': '水',
    '木曜日': '木',
    '金曜日': '金',
    '土曜日': '土',
    '日曜日': '日',
  };
  return map[day] || day;
};

export default function HouseworkItem({ item, onDelete }) {
  const displayText = item.text.length > 6 ? item.text.slice(0, 6) + '...' : item.text;
  
  return (
    <View style={[styles.listItem, { backgroundColor: weekColors[item.week] || '#E6F0FF' }]}>
      <MaterialCommunityIcons
        name={categoryIcons[item.category] || 'progress-question'}
        size={30}
        color="#090082"
        style={{ marginRight: 10 }}
      />
      <Text style={styles.listText}>
        {displayText}（{shortWeekday(item.week)}）
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <MaterialCommunityIcons name="close-box" size={30} color="red" style={styles.deleteIcon}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width:260,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  deleteIcon: {
    marginLeft: 15,
  },
});
