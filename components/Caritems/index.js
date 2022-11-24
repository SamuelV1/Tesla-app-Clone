import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import styles from './styles'

import React from 'react'
import StyledButton from '../button'


function CarItem(props) {

  const { name, tagline, image, taglineCTA } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      {/*header */}
      <View style={styles.tittles}>
        <Text style={styles.tittle}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.Cta}>{taglineCTA}</Text>
        </Text>

      </View>

      <View style={styles.buttonContainer}>
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


    </View>
  );
}

export default CarItem
