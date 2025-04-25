import { StyleSheet,View,Text} from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text>こんにち</Text>
      </View>
      <View style={styles.houseworkContainer}>
        <Text>こんにち</Text>
      </View>
      <View style={styles.timerContainer}>
        <Text>こんにち</Text>
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
    shadowColor: '#000',  // 影の色
    shadowOffset: { width: 0, height: 2 },  // 影の位置
    shadowOpacity: 0.3,  // 影の透明度
    shadowRadius: 4,  // 影のぼかしの半径
    elevation: 5,  // Android用
  },
});
