import React, { useState ,useEffect} from 'react';
import { StyleSheet, View,Text,SafeAreaView,TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabTwoScreen() {

  const [text, setText] = useState('');
  const [category, setCategory] = useState(null);

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
              <MaterialCommunityIcons 
              name="chevron-down" size={35} color="gray" style={styles.icon}
              />
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
          <TextInput
            style={styles.textBox}
            placeholder="家事名を入力"
            value={text}
            onChangeText={setText}
          />
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
    backgroundColor: 'white',
    paddingTop: 15,
  },
  label: {
    fontFamily: 'Arial',
    fontSize: 16,
    textAlign: 'left',
  },
  houseworkSettingContainer: {
    width: 330,
    paddingVertical: 30,
    paddingHorizontal:30,
    borderWidth:1,
    borderColor:'#EEEEEE',
    borderRadius: 15,
    marginVertical: 20,
    backgroundColor: 'white',
    justifyContent: 'space-around',
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
    paddingVertical: 20,
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
    marginRight: 10,
    marginTop:13,
  } 
});
