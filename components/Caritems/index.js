import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import styles from './styles'

import React from 'react'
import StyledButton from '../button'

function CarItem(props) {
    return (
        <View style={styles.carContainer}> 
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image}/>
            {/*header */}
            <View style={styles.tittles}>
              <Text style={styles.tittle}>Model S</Text>
              <Text style={styles.subtitle}>Starting at $69,420</Text>
  
            </View>

            <StyledButton type="Primary" content={"Custom order"} 
            onPress={() => {
              console.warn("Custom order pressed")
            }}>
            </StyledButton>
            <StyledButton type="Secondary" content={"Existing inventory"} 
            onPress={() => {
              console.warn("inventory pressed")
            }}></StyledButton>

        </View>
    );
  }

export default CarItem
