import { View, Text } from 'react-native'
import React from 'react'

const CarItem = () => {
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
  )
}

export default CarItem