import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/home/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <HomeScreen></HomeScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#ffff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
