import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/Caritems/index'
import CarList from './components/carList';


export default function App() {
  return (
    <View style={styles.container}>
    
    <CarList></CarList>
      
    <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
