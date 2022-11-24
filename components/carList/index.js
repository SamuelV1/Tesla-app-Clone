import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import CarItem from '../Caritems'

import cars from './cars'

const CarList = () => {
  return (
    <View>
      <FlatList style={styles.container}
      data={cars}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <CarItem car={item}/>}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default CarList