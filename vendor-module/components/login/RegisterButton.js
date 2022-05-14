import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from '../../styles/styles'

const RegisterButton = (props) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        props.callback();
      }}
    >
      <View>
        <Text style={{ color: "white", textAlign: "center" }}>
          Register
        </Text>
      </View>
    </Pressable>
  )
}

export default RegisterButton