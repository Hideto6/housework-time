import { StyleSheet, View,Text,SafeAreaView} from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.houseworkSettingContainer}>
        <Text style={styles.titleText}>家事の設定</Text>
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
  houseworkSettingContainer: {
    width: 330,
    paddingVertical: 20,
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
  titleText:{
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
});
