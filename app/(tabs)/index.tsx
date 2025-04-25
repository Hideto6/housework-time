import { StyleSheet,View,Text} from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>こんにち</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
  textcontainer:{
    fontSize:10,

  }
});
