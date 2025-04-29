import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HouseworkItem from '@/components/HouseworkItem';
import { useHousework } from '@/hooks/useHouseworkContext';

export default function TabTwoScreen() {
  const [text, setText] = useState(''); // 入力した家事内容をステート
  const [category, setCategory] = useState(null); // カテゴリー内容をステート
  const [week, setWeek] = useState(null); // 曜日内容をステート
  const { houseworkList, setHouseworkList } = useHousework(); //コンテキストAPI

  //家事の設定
  const handleAddTask = () => {
    if (text && category && week) {
      setHouseworkList([...houseworkList, { text, category, week }]);
      setText('');
      setCategory(null);
      setWeek(null);
    } else {
      alert("すべての項目を入力してください！");
    }
  };

  // リスト項目を表示するためのrenderItem
  const renderItem = ({ item, index }) => (
    <HouseworkItem
      item={item}
      onDelete={() => handleDeleteTask(index)}
    />
  );

  // アイテムを削除する関数
  const handleDeleteTask = (index) => {
    const newHouseworkList = houseworkList.filter((_, i) => i !== index);
    setHouseworkList(newHouseworkList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.houseworkSettingContainer}>
        <Text style={styles.titleText}>家事の設定</Text>
        <View style={styles.itemBox}>
          <Text style={styles.label}>家事名</Text>
          <TextInput
            style={styles.textBox}
            placeholder="例:リビング"
            value={text}
            onChangeText={setText}
          />
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.label}>カテゴリー</Text>
          <RNPickerSelect
            value={category}
            onValueChange={(value) => setCategory(value)}
            Icon={() => (
              <View style={{ width: 300, alignItems: "flex-end" }}>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={35}
                  color="#b4b4b4"
                  style={styles.icon}
                />
              </View>
            )}
            items={[
              { label: '掃除', value: '掃除' },
              { label: '洗濯', value: '洗濯' },
              { label: 'ゴミ出し', value: 'ゴミ出し' },
            ]}
            placeholder={{ label: 'カテゴリーを選んでください', value: "" }}
            style={{
              inputIOS: styles.categoryInput,
              inputAndroid: styles.categoryInput,
            }}
          />
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.label}>曜日</Text>
          <RNPickerSelect
            value={week}
            onValueChange={(value) => setWeek(value)}
            Icon={() => (
              <View style={{ width: 300, alignItems: "flex-end" }}>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={35}
                  color="#b4b4b4"
                  style={styles.icon}
                />
              </View>
            )}
            items={[
              { label: '月曜日', value: '月曜日' },
              { label: '火曜日', value: '火曜日' },
              { label: '水曜日', value: '水曜日' },
              { label: '木曜日', value: '木曜日' },
              { label: '金曜日', value: '金曜日' },
              { label: '土曜日', value: '土曜日' },
              { label: '日曜日', value: '日曜日' },
            ]}
            placeholder={{ label: '曜日を選んでください', value: "" }}
            style={{
              inputIOS: styles.categoryInput,
              inputAndroid: styles.categoryInput,
            }}
          />
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleAddTask}>
          <Text style={styles.saveText}>保存</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scheduleContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>家事の予定</Text>
        </View>
        {houseworkList.length === 0 ? (
          <Text style={styles.noTaskText}>予定がありません</Text>
        ) : (
          <FlatList
            data={[...houseworkList].sort((a, b) => {
              const weekOrder = {
                '月曜日': 0,
                '火曜日': 1,
                '水曜日': 2,
                '木曜日': 3,
                '金曜日': 4,
                '土曜日': 5,
                '日曜日': 6,
              };
              return weekOrder[a.week] - weekOrder[b.week];
            })}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()} // インデックスをキーとして使用
            contentContainerStyle={{ paddingTop: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 15,
  },
  label: {
    fontFamily: 'Arial',
    fontSize: 16,
    textAlign: 'left',
  },
  saveText: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  houseworkSettingContainer: {
    width: 330,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scheduleContainer: {
    width: 330,
    height:243,
    paddingTop: 20,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textBox: {
    width: 300,
    height: 50,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 5,
  },
  itemBox: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    width: 320,
  },
  categoryInput: {
    width: 300,
    height: 50,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 5,
  },
  titleContainer: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginTop: 13,
    width: 40,
  },
  saveButton: {
    width: 80,
    height: 40,
    backgroundColor: '#40B2FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTaskText: {
    fontSize: 18,
    color: '#888',
    paddingVertical: 10,
    marginTop: 60,
    marginBottom: 80,
    textAlign: 'center',
  },
});
