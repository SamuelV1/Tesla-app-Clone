import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const StyledButton = (props) => {

  const type = props.type;
  
  const backgroundColor = type === 'Primary' ? '#171A20CC' : '#FFFFFFA6';
  const textcolor = type === "Primary" ? '#FFFFFF' : '#171A20';
  const content = props.content;
  const onPress = props.onPress;

 

  return (
    <View style={styles.container}>
      <Pressable
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={() =>  onPress()}>  
      <Text style={[styles.text, {color: textcolor}]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton