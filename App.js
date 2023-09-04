import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';






export default function App() {
  return (
    <View style={styles.container}>
      <Navigation /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
