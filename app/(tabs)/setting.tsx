import React, { useState ,useEffect} from 'react';
import { StyleSheet, View,Text,SafeAreaView,TextInput,TouchableOpacity,FlatList} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabTwoScreen() {

  const [text, setText] = useState(''); //入力した家事内容をステート
  const [category, setCategory] = useState(null); //カテゴリー内容をステート
  const [week, setWeek] = useState(null); //曜日内容をステート
  const [houseworkList, setHouseworkList] = useState([]); // 家事リストを管理するステート

  const handleAddTask = () => {
    if (text && category && week) {
      // 家事をリストに追加
      setHouseworkList([...houseworkList, { text, category, week }]);
      // 入力欄をリセット
      setText('');
      setCategory(null);
      setWeek(null);
    } else {
      alert("すべての項目を入力してください！");
    }
  };

  // リスト項目を表示するためのrenderItem
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item.text} - {item.category} - {item.week}</Text>
    </View>
  );

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
            onValueChange={(value) => setCategory(value)}
            Icon={() => (
              <View style={{width:300, alignItems: "flex-end"}}>
                <MaterialCommunityIcons 
                name="chevron-down" size={35} color="#b4b4b4" style={styles.icon}
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
              inputIOS:styles.categoryInput,
              inputAndroid:styles.categoryInput,
            }}
          />
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.label}>曜日</Text>
          <RNPickerSelect
            onValueChange={(value) => setWeek(value)}
            Icon={() => (
              <View style={{width:300, alignItems: "flex-end"}}>
                <MaterialCommunityIcons 
                name="chevron-down" size={35} color="#b4b4b4" style={styles.icon}
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
              inputIOS:styles.categoryInput,
              inputAndroid:styles.categoryInput,
            }}
          />
        </View> 
        <TouchableOpacity style={styles.saveButton} onPress={handleAddTask}>
          <Text style={styles.saveText}>保存</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.titleText}>掃除の予定</Text>
        {houseworkList.length === 0 ? (
            <Text style={styles.noTaskText}>予定がありません</Text>
          ) : (
            <FlatList
              data={houseworkList}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()} // インデックスをキーとして使用
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
    color:'white',
    fontWeight:'bold',
  },
  houseworkSettingContainer: {
    width: 330,
    paddingVertical: 20,
    paddingHorizontal:30,
    borderWidth:1,
    borderColor:'#EEEEEE',
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,  //影の濃さ
    shadowRadius: 4,
    elevation: 3,  //android用
  },
   scheduleContainer: {
    width: 330,
    height:220,
    paddingTop:20,
    paddingHorizontal:30,
    borderWidth:1,
    borderColor:'#EEEEEE',
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,  //影の濃さ
    shadowRadius: 4,
    elevation: 3,  //android用
  },
  titleText:{
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  textBox: {
    width: 300,
    height: 50,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical:5,
  },
  itemBox: {
    paddingVertical: 10,
    paddingHorizontal:10,
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
    marginVertical:5,  
  },
  icon: {
    marginTop:13,
    width: 40,
  } ,
  saveButton: {
    width: 80,
    height: 40,
    backgroundColor: '#40B2FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  listText: {
    fontSize: 16,
  },
  noTaskText: {
    fontSize: 18,
    color: '#888',
    paddingVertical:10,
    bottom:30,
  },
});
