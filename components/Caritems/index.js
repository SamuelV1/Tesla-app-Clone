import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import styles from './styles'

import React from 'react'

function CarItem(props) {
    return (
        <View style={styles.carContainer}> 
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image}/>
            {/*header */}
            <View style={styles.tittles}>
              <Text style={styles.tittle}>Model S</Text>
              <Text style={styles.subtitle}>Starting at $69,420</Text>
  
            </View>
        </View>
    );
  }

export default CarItem
