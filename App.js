import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}> 
      <ImageBackground source={require('./assets/images/ModelX.jpeg')} style={styles.image}/>
          {/*header */}
          <View style={styles.tittles}>
            <Text style={styles.tittle}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $69,420</Text>

          </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  carContainer: {
    width: "100%",
    height: "100%",
  },
  tittles:{
    marginTop: '30%',
    width: "100%",
    alignItems: 'center',
  },
  subtitle: {
    color: "#5c5e62",
    fontSize: "16"
  },
  tittle: {
    fontSize: "40",
    fontWeight: "600",
  },
  image:{
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    position: "absolute"
  }
});
