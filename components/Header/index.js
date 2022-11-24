import { View, Text, Image} from 'react-native'
import React from 'react'
import styles from './style'


const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/logo.png')} /> 
      <Image style={styles.menu} source={require('../../assets/images/menu.png')} /> 
    </View>
  )
}

export default Header